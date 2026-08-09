/**
 * Generate packages/blode-icons-react/scripts/lucide-mapping.ts covering every
 * Lucide canonical icon name (+ historical aliases) with a Blode counterpart.
 *
 * Matching priority:
 * 1. Existing curated mappings in lucide-mapping.ts
 * 2. Exact kebab slug match
 * 3. Curated high-traffic synonyms in this file
 * 4. Fuse fuzzy match against Blode slugs/tags
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import Fuse from "fuse.js";

const __dirname = import.meta.dirname;
const packageRoot = path.join(__dirname, "..");
const mappingOut = path.join(__dirname, "lucide-mapping.ts");
const svgDir = path.join(packageRoot, "icons-svg");
const dataDir = path.join(packageRoot, "icons-data");

// Prefer a local lucide-static extract when present (agent/dev), else download names.
const lucideTagsPath = "/tmp/lucide-icons/package/tags.json";
const lucideAliasesPath = "/tmp/lucide-aliases.json";
const lucideCanonicalPath = "/tmp/lucide-canonical.json";

function kebabToPascal(kebab) {
  return kebab
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function pascalToKebab(name) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

function slugToComponent(slug) {
  return `${kebabToPascal(slug)}Icon`;
}

function inferCategory(slug, metaCategory) {
  if (metaCategory) {
    return metaCategory;
  }
  if (/arrow|chevron|corner/.test(slug)) {
    return "Navigation";
  }
  if (/user|people|person/.test(slug)) {
    return "User";
  }
  if (/file|folder|page|document/.test(slug)) {
    return "Files";
  }
  if (/chart|trend/.test(slug)) {
    return "Charts";
  }
  if (/lock|key|shield|login|unlock/.test(slug)) {
    return "Auth";
  }
  if (/code|git|terminal|bug|console/.test(slug)) {
    return "Developer";
  }
  if (/play|pause|music|video|camera|mic|volume/.test(slug)) {
    return "Media";
  }
  return "Misc";
}

/** High-traffic Lucide names → Blode kebab slugs (validated at runtime). */
const CURATED = {
  Search: "magnifying-glass",
  Home: "home",
  House: "home",
  Settings: "settings-gear-1",
  Settings2: "settings-slider-three",
  Cog: "settings-gear-1",
  Menu: "burger",
  MoreHorizontal: "dot-grid-1x3-horizontal",
  MoreVertical: "dot-grid-1x3-vertical",
  Ellipsis: "dot-grid-1x3-horizontal",
  EllipsisVertical: "dot-grid-1x3-vertical",
  Loader: "loader",
  Loader2: "loading-circle",
  LoaderCircle: "loading-circle",
  Check: "checkmark-1",
  X: "cross-medium",
  Plus: "plus-medium",
  Minus: "minus-medium",
  Trash: "trash-can",
  Trash2: "trash-can-2",
  Pencil: "pencil",
  Pen: "pencil",
  PenLine: "pencil-line",
  SquarePen: "edit-big",
  PenSquare: "edit-big",
  Edit: "edit-big",
  Edit2: "edit-small-1",
  Edit3: "edit-small-2",
  File: "blank-page-portrait",
  FileText: "page-text",
  User: "user",
  Users: "people",
  User2: "user",
  UserRound: "user",
  Users2: "people-2",
  CircleUser: "circle-person",
  Mail: "email-1",
  MailOpen: "email-2",
  Inbox: "inbox-empty",
  Bell: "bell",
  Calendar: "calendar-1",
  Clock: "clock",
  Eye: "eye-open",
  EyeOff: "eye-slash",
  Lock: "lock",
  Unlock: "unlocked",
  Key: "key",
  Link: "chain-link-1",
  Link2: "chain-link-2",
  ExternalLink: "square-arrow-top-right",
  Download: "file-download",
  Upload: "cloud-upload",
  Share: "share",
  Share2: "share-android",
  Copy: "copy-simple",
  Clipboard: "clipboard",
  ClipboardCheck: "clipboard-2",
  Filter: "filter-1",
  FilterX: "filter-1",
  List: "list-bullets",
  ListOrdered: "numbered-list",
  ListChecks: "checklist",
  ListTodo: "checklist",
  LayoutGrid: "layout-grid-1",
  LayoutList: "list-bullets",
  LayoutDashboard: "window-app",
  Grid: "layout-grid-1",
  Grid2x2: "layout-grid-1",
  Grid3x3: "dot-grid-3x3",
  PanelLeft: "sidebar",
  PanelRight: "sidebar-simple-right-wide",
  Sidebar: "sidebar",
  SidebarClose: "sidebar",
  SidebarOpen: "sidebar",
  Sun: "sun",
  Moon: "moon",
  Smartphone: "phone",
  Tablet: "tablet",
  Wifi: "wifi-full",
  WifiOff: "wifi-no-signal",
  WifiLow: "wifi-weak",
  WifiHigh: "wifi-full",
  WifiZero: "wifi-no-signal",
  Bluetooth: "bluetooth",
  Battery: "battery-empty",
  BatteryCharging: "battery-loading",
  BatteryFull: "battery-full",
  BatteryLow: "battery-low",
  BatteryMedium: "battery-medium",
  Volume: "volume-half",
  Volume1: "volume-minimum",
  Volume2: "volume-half",
  VolumeX: "volume-off",
  Mic: "microphone",
  MicOff: "microphone-off",
  Camera: "camera-1",
  CameraOff: "camera-off",
  Video: "video",
  VideoOff: "video-off",
  Play: "play",
  Pause: "pause",
  Star: "star",
  Heart: "heart",
  Bookmark: "bookmark",
  Tag: "tag",
  Map: "map",
  MapPin: "map-pin",
  Globe: "globe",
  Globe2: "globe-2",
  Earth: "earth",
  Wallet: "wallet-1",
  DollarSign: "dollar",
  Euro: "euro",
  JapaneseYen: "yen",
  PoundSterling: "pound",
  Percent: "percent",
  Calculator: "calculator",
  ChartBar: "chart-1",
  ChartLine: "chart-2",
  ChartPie: "chart-3",
  PieChart: "chart-3",
  AreaChart: "chart-2",
  BarChart: "chart-1",
  BarChart2: "chart-1",
  BarChart3: "chart-1",
  LineChart: "chart-2",
  TrendingUp: "trending-1",
  TrendingDown: "trending-down-simple",
  Zap: "zap",
  Flame: "fire-1",
  Sparkle: "sparkle",
  Lightbulb: "lightbulb",
  Rocket: "rocket",
  Plane: "airplane",
  Car: "car",
  Bus: "bus",
  Bike: "bike",
  Ship: "ship",
  Truck: "truck",
  Gift: "gift-1",
  Package: "package",
  Box: "box-2",
  Boxes: "blocks",
  Archive: "archive",
  Folder: "folder-1",
  FolderOpen: "folder-open",
  Folders: "folder-2",
  Server: "server",
  Cloud: "cloud",
  CloudOff: "cloud-off",
  CloudDownload: "cloud-download",
  CloudUpload: "cloud-upload",
  Code: "code",
  Code2: "code-medium",
  CodeXml: "code",
  Terminal: "console",
  Braces: "code-brackets",
  Bug: "bug",
  Github: "github",
  Twitter: "x-twitter",
  Facebook: "facebook",
  Instagram: "instagram",
  Linkedin: "linkedin",
  Youtube: "youtube",
  Twitch: "twitch",
  Slack: "slack",
  Figma: "figma",
  Chrome: "chrome",
  Apple: "apple",
  MessageCircle: "chat-bubble-7",
  MessageSquare: "chat-bubble-7",
  MessagesSquare: "chat-bubbles",
  Send: "send",
  Annoyed: "emoji-neutral",
  Laugh: "emoji-smile",
  ThumbsUp: "thumbs-up",
  ThumbsDown: "thumbs-down",
  Handshake: "handshake",
  Info: "info",
  CircleHelp: "circle-questionmark",
  HelpCircle: "circle-questionmark",
  CircleAlert: "bubble-alert",
  AlertCircle: "bubble-alert",
  TriangleAlert: "warning-sign",
  AlertTriangle: "warning-sign",
  CircleCheck: "check-circle-2",
  CheckCircle: "check-circle-2",
  CheckCircle2: "check-circle-2",
  CircleX: "circle-x",
  XCircle: "circle-x",
  Ban: "circle-ban-sign",
  Shield: "shield",
  ShieldCheck: "shield-check",
  ShieldAlert: "shield",
  ShieldOff: "shield",
  LogIn: "login",
  LogOut: "arrow-box-right",
  RefreshCw: "arrow-rotate-clockwise",
  RefreshCcw: "arrow-rotate-counter-clockwise",
  RotateCw: "arrow-rotate-clockwise",
  RotateCcw: "arrow-rotate-counter-clockwise",
  Undo: "arrow-undo-up",
  Undo2: "arrow-undo-up",
  Redo: "arrow-redo-up",
  Redo2: "arrow-redo-up",
  History: "clock",
  Save: "floppy-disk-1",
  Printer: "printer",
  QrCode: "qr-code",
  AtSign: "at",
  Pin: "pin",
  PinOff: "pin",
  Crop: "crop",
  ZoomIn: "zoom-in",
  ZoomOut: "zoom-out",
  GripVertical: "dot-grid-1x3-vertical",
  GripHorizontal: "dot-grid-1x3-horizontal",
  MousePointer: "cursor",
  MousePointer2: "cursor-2",
  MousePointerClick: "cursor-click",
  TextCursorInput: "cursor-1",
  TextCursor: "cursor-1",
  Grab: "hand-5-finger",
  Bold: "bold",
  Italic: "italic",
  Underline: "underline",
  Strikethrough: "strike-through",
  Radio: "radio",
  Cast: "airplay",
  ScreenShare: "share-screen",
  Wind: "wind",
  Sunrise: "sunrise",
  Sunset: "sunset",
  Snowflake: "snow-flakes",
  SortAsc: "filter-asc",
  SortDesc: "filter-desc",
  SeparatorHorizontal: "minus-medium",
  SeparatorVertical: "minus-medium",
  AlarmClock: "bell-alarm",
  AlarmCheck: "bell-check",
  AlarmClockCheck: "bell-check",
  AlarmClockOff: "bell-off",
  AlarmMinus: "bell",
  AlarmPlus: "bell",
  AlarmClockMinus: "bell",
  AlarmClockPlus: "bell",
  Album: "albums",
  Wrench: "toolbox",
  Hammer: "hammer",
  Scissors: "scissors-1",
  Ruler: "ruler",
  SearchCode: "search-intelligence",
  SearchX: "magnifying-glass-2",
  Circle: "circle",
  Square: "form-square",
  Triangle: "triangle-exclamation",
  Hexagon: "form-hexagon",
  Octagon: "form-octagon",
  Asterisk: "asterisk",
  Slash: "slash-forward",
  Signal: "signal",
  Antenna: "signal-tower",
  Satellite: "satellite",
  SatelliteDish: "satellite-1",
  Clapperboard: "clapperboard",
  Film: "clapboard",
  Tv: "television",
  Tv2: "television",
  TvMinimal: "television",
  Speaker: "speaker",
  NotebookPen: "notebook",
  CaseSensitive: "title-case",
  ClipboardCopy: "clipboard",
  ClipboardPaste: "clipboard",
  ClipboardList: "clipboard",
  ClipboardX: "clipboard",
  PanelTop: "window",
  PanelBottom: "window",
  LockKeyhole: "lock",
  CloudFog: "cloud",
  CloudDrizzle: "rainy",
  CloudHail: "rainy",
  CloudMoon: "moon",
  ThermometerSun: "thermostat",
  ThermometerSnowflake: "thermostat",
  ShoppingCart: "basket-1",
  ShoppingBag: "shopping-bag-1",
  Image: "images-1",
  Images: "images-3",
  Smile: "emoji-smile",
  Frown: "emoji-sad",
  Meh: "emoji-neutral",
  Angry: "emoji-angry",
  Hand: "hand-5-finger",
  Pointer: "pointer",
  Accessibility: "wheelchair",
  Languages: "translate",
  Captions: "closed-captioning",
  CaptionsOff: "closed-captioning",
  Subtitles: "closed-captioning",
  Podcast: "podcast-1",
  Rss: "rss-feed",
  Headphones: "headphones",
  Headset: "headphones",
  Music: "note-1",
  Music2: "note-1",
  Music3: "note-2",
  Music4: "note-2",
  Disc: "cd",
  Disc2: "cd",
  Disc3: "cd",
  DiscAlbum: "cd",
  AudioWaveform: "audio",
  AudioLines: "audio-bars",
  Droplet: "drop",
  Droplets: "drop",
  Umbrella: "umbrella-security",
  Thermometer: "thermostat",
  CloudRain: "rainy",
  CloudSnow: "cloud-snow",
  CloudLightning: "lightning",
  Cloudy: "cloud",
  CloudSun: "cloudy-sun",
  Rainbow: "rainbow",
  Crosshair: "target",
  Focus: "focus",
  Contrast: "contrast",
  Infinity: "infinity",
  FunctionSquare: "sound-fx",
  Wand: "star-wand",
  Wand2: "star-wand",
  Bot: "robot",
  Book: "book",
  BookOpen: "book-simple",
  BookMarked: "bookmark",
  Library: "books",
  Newspaper: "newspaper",
  Quote: "quote",
  AlignLeft: "alignment-left",
  AlignCenter: "alignment-center",
  AlignRight: "alignment-right",
  AlignJustify: "alignment-justify",
  TextAlignStart: "alignment-left",
  TextAlignCenter: "alignment-center",
  TextAlignEnd: "alignment-right",
  TextAlignJustify: "alignment-justify",
  Indent: "text-indent-left",
  IndentIncrease: "text-indent-left",
  IndentDecrease: "text-indent-right",
  Outdent: "text-indent-right",
  WrapText: "bubble-text",
  RemoveFormatting: "strike-through",
  SpellCheck: "title-case",
  Heading: "title-case",
  Heading1: "h1",
  Heading2: "title-case",
  Heading3: "title-case",
  FormInput: "input-form",
  TextSelect: "input-form",
  Maximize: "expand",
  Maximize2: "expand",
  Minimize: "minimize",
  Minimize2: "minimize",
  Fullscreen: "arrows-all-sides",
  Scaling: "arrows-zoom",
  Expand: "expand",
  Shrink: "minimize",
  Move: "arrows-all-sides-2",
  Paperclip: "paperclip-1",
  Hash: "hashtag",
  Power: "green-power",
  PowerOff: "green-power",
  Forward: "fast-forward",
  Reply: "arrow-undo-up",
  Activity: "live-activity",
  Train: "train-front-view",
  Laptop: "macbook",
  Monitor: "imac",
  Flag: "flag-1",
  Tags: "tag",
  Compass: "compass-round",
  Building: "buildings",
  Building2: "buildings",
  Store: "store-1",
  Timer: "stopwatch",
  CreditCard: "credit-card-1",
  Gauge: "gauge",
  PaintBucket: "paint-bucket",
  Pipette: "eyedropper",
  Aperture: "camera-1",
  Palette: "color-palette",
  Paintbrush: "paint-brush",
  Ad: "megaphone",
  AirVent: "airplay",
};

function loadExistingMappings() {
  if (!fs.existsSync(mappingOut)) {
    return new Map();
  }
  // Prefer the checked-in seed (pre-generated) when regenerating. Parse with
  // regex so we do not need type-stripping on a multi-thousand-line .ts file.
  const src = fs.readFileSync(mappingOut, "utf-8");
  // If this is already a generated full map, keep only the hand-curated seed
  // markers by skipping regeneration of "Generated by" files unless --force.
  const parsed = [];
  const blockRe =
    /\{\s*blodeName:\s*"([^"]+)",\s*category:\s*"[^"]*",\s*hasMatch:\s*true,\s*lucideName:\s*"([^"]+)",\s*\}/g;
  for (const match of src.matchAll(blockRe)) {
    parsed.push({
      blodeName: match[1],
      hasMatch: true,
      lucideName: match[2],
    });
  }
  return new Map(parsed.map((m) => [m.lucideName, m]));
}

function loadLucideCatalog() {
  if (!fs.existsSync(lucideTagsPath)) {
    throw new Error(
      `Missing ${lucideTagsPath}. Extract lucide-static tags.json there first.`
    );
  }
  const tags = JSON.parse(fs.readFileSync(lucideTagsPath, "utf-8"));
  const canonicalKebab = Object.keys(tags);
  const canonicalPascal = canonicalKebab.map(kebabToPascal);

  let aliasToCanonical = {};
  if (fs.existsSync(lucideAliasesPath)) {
    aliasToCanonical = JSON.parse(fs.readFileSync(lucideAliasesPath, "utf-8"));
  } else if (fs.existsSync(lucideCanonicalPath)) {
    // aliases optional
  }

  return { aliasToCanonical, canonicalPascal, tags };
}

function loadBlodeDocs() {
  const svgNames = fs
    .readdirSync(svgDir)
    .filter((f) => f.endsWith(".svg"))
    .map((f) => f.slice(0, -4));
  const baseSlugs = svgNames.filter((n) => !n.endsWith("-filled")).toSorted();
  const bySlug = new Map();

  const docs = baseSlugs.map((slug) => {
    let tags = [];
    let category = "";
    const fp = path.join(dataDir, `${slug}.json`);
    if (fs.existsSync(fp)) {
      const meta = JSON.parse(fs.readFileSync(fp, "utf-8"));
      tags = Array.isArray(meta.tags) ? meta.tags : [];
      category = meta.category || "";
    }
    const doc = {
      category,
      name: slugToComponent(slug),
      slug,
      tags,
      title: slug.replaceAll("-", " "),
    };
    bySlug.set(slug, doc);
    return doc;
  });

  return { bySlug, docs, slugSet: new Set(baseSlugs) };
}

function resolveSlug(candidate, slugSet) {
  if (!candidate) {
    return null;
  }
  if (slugSet.has(candidate)) {
    return candidate;
  }
  return null;
}

async function main() {
  // Seed from the original curated file when present; otherwise from current.
  const seedPath = path.join(__dirname, "lucide-mapping.seed.ts");
  const mappingSource = fs.existsSync(seedPath) ? seedPath : mappingOut;
  // Temporarily point loadExisting at seed if available
  if (fs.existsSync(seedPath) && mappingSource === seedPath) {
    fs.copyFileSync(seedPath, mappingOut);
  }
  const existing = loadExistingMappings();
  const { aliasToCanonical, canonicalPascal, tags } = loadLucideCatalog();
  const { bySlug, docs, slugSet } = loadBlodeDocs();

  const fuse = new Fuse(docs, {
    includeScore: true,
    ignoreLocation: true,
    keys: [
      { name: "slug", weight: 0.45 },
      { name: "title", weight: 0.3 },
      { name: "tags", weight: 0.2 },
      { name: "category", weight: 0.05 },
    ],
    // Accept any best match for full Lucide coverage; curated/exact win first.
    threshold: 1,
  });

  /** @type {Map<string, { blodeName: string, category: string, hasMatch: boolean, lucideName: string, match: string }>} */
  const out = new Map();

  const setMapping = (lucideName, slug, match, force = false) => {
    if (out.has(lucideName) && !force) {
      return;
    }
    const doc = bySlug.get(slug);
    if (!doc) {
      return;
    }
    out.set(lucideName, {
      blodeName: doc.name,
      category: inferCategory(slug, doc.category),
      hasMatch: true,
      lucideName,
      match,
    });
  };

  // 1) Keep existing curated mappings when slug still exists
  for (const [lucideName, entry] of existing) {
    const slug = pascalToKebab(entry.blodeName.replace(/Icon$/, ""));
    // blodeName is ComponentIcon — resolve via component map
    const byName = docs.find((d) => d.name === entry.blodeName);
    if (byName) {
      setMapping(lucideName, byName.slug, "existing", true);
    } else if (slugSet.has(slug)) {
      setMapping(lucideName, slug, "existing", true);
    }
  }

  // 2) Exact slug matches for every canonical Lucide icon
  for (const lucideName of canonicalPascal) {
    if (out.has(lucideName)) {
      continue;
    }
    const kebab = pascalToKebab(lucideName);
    if (slugSet.has(kebab)) {
      setMapping(lucideName, kebab, "exact");
    }
  }

  // 3) Curated synonyms
  for (const [lucideName, slug] of Object.entries(CURATED)) {
    const resolved = resolveSlug(slug, slugSet);
    if (!resolved) {
      console.warn(`  skip curated ${lucideName} → missing slug ${slug}`);
      continue;
    }
    if (!out.has(lucideName)) {
      setMapping(lucideName, resolved, "curated");
    }
  }

  // 4) Fuzzy fallback for remaining canonical icons — always take best match
  let fuzzyCount = 0;
  for (const lucideName of canonicalPascal) {
    if (out.has(lucideName)) {
      continue;
    }
    const kebab = pascalToKebab(lucideName);
    const lucideTags = tags[kebab] || [];
    const query = [kebab.replaceAll("-", " "), ...lucideTags].join(" ");
    const hits = fuse.search(query, { limit: 1 });
    const slug = hits[0]?.item?.slug ?? "circle";
    setMapping(lucideName, slug, hits[0] ? "fuzzy" : "fallback");
    fuzzyCount++;
  }

  // 5) Historical Lucide aliases → same Blode target as canonical
  let aliasCount = 0;
  for (const [alias, canonical] of Object.entries(aliasToCanonical)) {
    if (out.has(alias)) {
      continue;
    }
    const canonicalEntry = out.get(canonical);
    if (!canonicalEntry) {
      continue;
    }
    const slug = pascalToKebab(canonicalEntry.blodeName.replace(/Icon$/, ""));
    const doc =
      bySlug.get(slug) || docs.find((d) => d.name === canonicalEntry.blodeName);
    if (!doc) {
      continue;
    }
    setMapping(alias, doc.slug, "alias");
    aliasCount++;
  }

  // Also ensure X is mapped (single-letter edge case)
  if (!out.has("X") && slugSet.has("cross-medium")) {
    setMapping("X", "cross-medium", "curated", true);
  }

  const entries = [...out.values()].toSorted((a, b) =>
    a.lucideName.localeCompare(b.lucideName)
  );

  const counts = entries.reduce((acc, e) => {
    acc[e.match] = (acc[e.match] || 0) + 1;
    return acc;
  }, {});

  const lines = [
    "export interface IconMapping {",
    "  blodeName: string;",
    "  category: string;",
    "  hasMatch: boolean;",
    "  isChanged?: boolean;",
    "  lucideName: string;",
    "}",
    "",
    "// Generated by scripts/generate-lucide-mapping.mjs",
    `// ${entries.length} Lucide names → Blode icons`,
    `// match breakdown: ${JSON.stringify(counts)}`,
    "export const mappings: IconMapping[] = [",
  ];

  const body = entries
    .map(
      (entry) => `  {
    blodeName: "${entry.blodeName}",
    category: "${entry.category.replaceAll('"', '\\"')}",
    hasMatch: true,
    lucideName: "${entry.lucideName}",
  },`
    )
    .join("\n");

  const output = `${lines.join("\n")}
${body}
];

export const categories = [...new Set(mappings.map((m) => m.category))];
`;

  fs.writeFileSync(mappingOut, output);
  console.log(
    `Wrote ${entries.length} mappings (${JSON.stringify(counts)}; fuzzy=${fuzzyCount}; aliases=${aliasCount})`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
