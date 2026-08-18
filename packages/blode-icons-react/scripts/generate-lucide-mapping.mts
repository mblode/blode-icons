/**
 * Generate packages/blode-icons-react/scripts/lucide-mapping.ts covering every
 * Lucide canonical icon name (+ historical aliases) with a Blode counterpart.
 *
 * Matching priority:
 * 1. Existing curated mappings in lucide-mapping.seed.ts
 * 2. Exact kebab slug match
 * 3. Curated high-traffic synonyms in this file
 * 4. Same words in a different order (`circle-arrow-left` = `arrow-left-circle`)
 * 5. Fuse fuzzy match against Blode slugs/tags
 *
 * Only 1–4 are exported from the package. Fuse accepts any best match, so a
 * fuzzy hit means "closest of 2000 icons", not "the same icon" — those are
 * written with `hasMatch: false` so `build.mts` skips them. Promote one by
 * adding it to CURATED once a human has eyeballed the pair.
 *
 * The Lucide catalog comes from the `lucide-static` devDependency, so this is
 * reproducible on a clean checkout and the version is pinned in package.json.
 */
import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { pathToFileURL } from "node:url";

import Fuse from "fuse.js";

const __dirname = import.meta.dirname;
const packageRoot = path.join(__dirname, "..");
const mappingOut = path.join(__dirname, "lucide-mapping.ts");
const svgDir = path.join(packageRoot, "icons-svg");
const dataDir = path.join(packageRoot, "icons-data");

const require = createRequire(import.meta.url);

/** A Blode icon as Fuse sees it. */
interface BlodeDoc {
  category: string;
  name: string;
  slug: string;
  tags: string[];
  title: string;
}

/** A row of the generated mapping file. */
interface Mapping {
  blodeName: string;
  category: string;
  hasMatch: boolean;
  lucideName: string;
  match: string;
}

/** The fields this script needs from a previously generated (or seed) mapping.
 *  The seed file predates `match` and `visualScore`, so neither is assumed. */
interface SeedEntry {
  blodeName: string;
  hasMatch: boolean;
  lucideName: string;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isSeedEntry(value: unknown): value is SeedEntry {
  return (
    isRecord(value) &&
    typeof value.blodeName === "string" &&
    typeof value.lucideName === "string" &&
    typeof value.hasMatch === "boolean"
  );
}

/** Match kinds a human (or an exact slug) stands behind. Everything else is a guess. */
const TRUSTED_MATCHES = new Set(["existing", "exact", "curated", "reordered"]);

/**
 * A historical alias is exactly as trustworthy as the canonical name it
 * redirects to, so its match kind is recorded as `alias:<canonical kind>`.
 */
function isTrustedMatch(match: string): boolean {
  return TRUSTED_MATCHES.has(match.replace(/^alias:/, ""));
}

function kebabToPascal(kebab: string): string {
  return kebab
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function pascalToKebab(name: string): string {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

function slugToComponent(slug: string): string {
  return `${kebabToPascal(slug)}Icon`;
}

function inferCategory(slug: string, metaCategory: string): string {
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
const CURATED: Record<string, string> = {
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

async function loadExistingMappings(
  sourcePath: string
): Promise<Map<string, SeedEntry>> {
  if (!fs.existsSync(sourcePath)) {
    return new Map();
  }
  // Read as a module (node strips the types) rather than scraping the source,
  // so reformatting the mapping cannot silently yield zero seeds.
  const loaded: unknown = await import(pathToFileURL(sourcePath).href);
  const raw = isRecord(loaded) ? loaded.mappings : undefined;
  if (!Array.isArray(raw)) {
    throw new TypeError(
      `${path.basename(sourcePath)} does not export a \`mappings\` array.`
    );
  }
  return new Map(
    (raw as unknown[])
      .filter(isSeedEntry)
      .filter((entry) => entry.hasMatch)
      .map((entry) => [entry.lucideName, entry] as const)
  );
}

function loadLucideCatalog(): {
  aliasToCanonical: Record<string, string>;
  canonicalPascal: string[];
  tags: Record<string, string[]>;
} {
  const rawTags: unknown = require("lucide-static/tags.json");
  if (!isRecord(rawTags)) {
    throw new Error("lucide-static/tags.json is not an object.");
  }
  const tags: Record<string, string[]> = {};
  for (const [slug, value] of Object.entries(rawTags)) {
    tags[slug] = Array.isArray(value)
      ? value.filter((tag): tag is string => typeof tag === "string")
      : [];
  }
  const canonicalPascal = Object.keys(tags).map(kebabToPascal);

  // lucide-static's declaration file ends in one `export { ... }` listing every
  // public name. Historical aliases appear there as `Canonical as Alias`, which
  // is the only machine-readable alias map Lucide publishes.
  const declarationPath =
    require.resolve("lucide-static/dist/lucide-static.d.ts");
  const declaration = fs.readFileSync(declarationPath, "utf-8");
  const exportBlock = declaration.match(/export \{([^}]*)\};?\s*$/m);
  if (!exportBlock) {
    throw new Error(
      `Could not find the export list in ${declarationPath}. The lucide-static layout changed; update this parser.`
    );
  }

  const aliasToCanonical: Record<string, string> = {};
  for (const entry of exportBlock[1].split(",")) {
    const aliased = entry.trim().match(/^(\w+) as (\w+)$/);
    if (aliased) {
      aliasToCanonical[aliased[2]] = aliased[1];
    }
  }

  const pkg: unknown = require("lucide-static/package.json");
  const version =
    isRecord(pkg) && typeof pkg.version === "string" ? pkg.version : "unknown";
  console.log(
    `Lucide catalog: ${canonicalPascal.length} canonical names, ${Object.keys(aliasToCanonical).length} historical aliases (lucide-static ${version})`
  );

  return { aliasToCanonical, canonicalPascal, tags };
}

function loadBlodeDocs(): {
  bySlug: Map<string, BlodeDoc>;
  docs: BlodeDoc[];
  slugSet: Set<string>;
} {
  const svgNames = fs
    .readdirSync(svgDir)
    .filter((f) => f.endsWith(".svg"))
    .map((f) => f.slice(0, -4));
  const baseSlugs = svgNames.filter((n) => !n.endsWith("-filled")).toSorted();
  const bySlug = new Map<string, BlodeDoc>();

  const docs = baseSlugs.map((slug) => {
    let tags: string[] = [];
    let category = "";
    const fp = path.join(dataDir, `${slug}.json`);
    if (fs.existsSync(fp)) {
      const meta: unknown = JSON.parse(fs.readFileSync(fp, "utf-8"));
      if (isRecord(meta)) {
        tags = Array.isArray(meta.tags)
          ? meta.tags.filter((tag): tag is string => typeof tag === "string")
          : [];
        category = typeof meta.category === "string" ? meta.category : "";
      }
    }
    const doc: BlodeDoc = {
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

function resolveSlug(
  candidate: string | undefined,
  slugSet: Set<string>
): string | null {
  if (!candidate) {
    return null;
  }
  if (slugSet.has(candidate)) {
    return candidate;
  }
  return null;
}

async function main(): Promise<void> {
  // Seed from the original curated file when present; otherwise from current.
  const seedPath = path.join(__dirname, "lucide-mapping.seed.ts");
  const existing = await loadExistingMappings(
    fs.existsSync(seedPath) ? seedPath : mappingOut
  );
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

  const out = new Map<string, Mapping>();

  const setMapping = (
    lucideName: string,
    slug: string,
    match: string,
    force = false
  ): void => {
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
      hasMatch: isTrustedMatch(match),
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

  // 4) Same words, different order. Blode writes `arrow-left-circle` where
  // Lucide writes `circle-arrow-left`; an identical multiset of words is a
  // strong signal, so these are exported like an exact hit. Without this the
  // whole circle-arrow/square-arrow family falls through to a fuzzy guess.
  const bySortedWords = new Map<string, string>();
  for (const doc of docs) {
    const key = doc.slug.split("-").toSorted().join("-");
    if (!bySortedWords.has(key)) {
      bySortedWords.set(key, doc.slug);
    }
  }
  let reorderedCount = 0;
  for (const lucideName of canonicalPascal) {
    if (out.has(lucideName)) {
      continue;
    }
    const key = pascalToKebab(lucideName).split("-").toSorted().join("-");
    const slug = bySortedWords.get(key);
    if (slug) {
      setMapping(lucideName, slug, "reordered");
      reorderedCount++;
    }
  }
  console.log(`  ${reorderedCount} matched on reordered words`);

  // 5) Fuzzy fallback for remaining canonical icons — always take best match
  let fuzzyCount = 0;
  for (const lucideName of canonicalPascal) {
    if (out.has(lucideName)) {
      continue;
    }
    const kebab = pascalToKebab(lucideName);
    const lucideTags = tags[kebab] ?? [];
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
    setMapping(alias, doc.slug, `alias:${canonicalEntry.match}`);
    aliasCount++;
  }

  // Also ensure X is mapped (single-letter edge case)
  if (!out.has("X") && slugSet.has("cross-medium")) {
    setMapping("X", "cross-medium", "curated", true);
  }

  const entries = [...out.values()].toSorted((a, b) =>
    a.lucideName.localeCompare(b.lucideName)
  );

  const counts = entries.reduce<Record<string, number>>((acc, e) => {
    acc[e.match] = (acc[e.match] || 0) + 1;
    return acc;
  }, {});

  const exported = entries.filter((entry) => entry.hasMatch);

  const lines = [
    "export interface IconMapping {",
    "  blodeName: string;",
    "  category: string;",
    "  /** Whether the pair is trustworthy enough to export. Fuzzy guesses are false. */",
    "  hasMatch: boolean;",
    "  isChanged?: boolean;",
    "  lucideName: string;",
    "  /** How the pair was found: exact | curated | existing | fuzzy | alias:<kind>. */",
    "  match: string;",
    "}",
    "",
    "// Generated by scripts/generate-lucide-mapping.mts — do not edit by hand.",
    `// ${exported.length} of ${entries.length} Lucide names export (the rest are`,
    "// fuzzy guesses kept for triage; promote one via CURATED in the generator).",
    `// match breakdown: ${JSON.stringify(counts)}`,
    "export const mappings: IconMapping[] = [",
  ];

  const body = entries
    .map(
      (entry) => `  {
    blodeName: "${entry.blodeName}",
    category: "${entry.category.replaceAll('"', '\\"')}",
    hasMatch: ${entry.hasMatch},
    lucideName: "${entry.lucideName}",
    match: "${entry.match}",
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
  console.log(
    `  ${exported.length} export (hasMatch: true); ${entries.length - exported.length} held back as unverified guesses`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
