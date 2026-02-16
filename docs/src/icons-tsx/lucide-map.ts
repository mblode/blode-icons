/**
 * Lucide → Fingertip icon name mapping.
 *
 * Keys are Lucide export names (e.g. "ChevronRight").
 * Values are @fingertip/icons export names (e.g. "ChevronRightIcon").
 *
 * Used by scripts/generate-lucide-compat.js to produce src/lucide.ts.
 */
export const lucideMap: Record<string, string> = {
  // Navigation & Chevrons
  ChevronDown: 'ChevronDownIcon',
  ChevronUp: 'ChevronUpIcon',
  ChevronLeft: 'ChevronLeftIcon',
  ChevronRight: 'ChevronRightIcon',
  ChevronsUpDown: 'ChevronGrabberVerticalIcon',
  ArrowDown: 'ArrowDownIcon',
  ArrowUp: 'ArrowUpIcon',
  ArrowLeft: 'ArrowLeftIcon',
  ArrowRight: 'ArrowRightIcon',
  ArrowUpDown: 'ArrowTopBottomIcon',
  ArrowUpRight: 'ArrowUpRightIcon',
  ArrowDownLeft: 'ArrowDownLeftIcon',
  ArrowDownRight: 'ArrowDownRightIcon',
  ArrowUpLeft: 'ArrowUpLeftIcon',
  ArrowDownFromLine: 'ArrowFromLineDownIcon',
  ArrowUpFromLine: 'ArrowFromLineUpIcon',
  CornerDownLeft: 'ArrowCornerDownLeftIcon',

  // Status & Validation
  Check: 'CheckIcon',
  CheckCircle2: 'CircleCheckIcon',
  CircleCheck: 'CircleCheckIcon',
  Circle: 'CircleOutlineIcon',
  X: 'CrossLargeIcon',
  AlertCircle: 'CircleExclamationIcon',
  CircleAlert: 'CircleExclamationIcon',
  AlertTriangle: 'TriangleExclamationIcon',
  TriangleAlert: 'TriangleExclamationIcon',
  Info: 'InfoIcon',
  CircleX: 'CircleXIcon',
  CircleHelp: 'CircleQuestionmarkIcon',
  BadgeCheck: 'VerifiedCheckIcon',
  ShieldAlert: 'ShieldBreakIcon',

  // Actions & Controls
  Plus: 'PlusLargeIcon',
  Minus: 'MinusLargeIcon',
  Search: 'MagnifyingGlassIcon',
  Filter: 'Filter1Icon',
  Settings: 'SettingsGear1Icon',
  Settings2: 'SettingsSliderHorIcon',
  Pencil: 'PencilIcon',
  Trash: 'TrashCan2Icon',
  Trash2: 'TrashCan2Icon',
  Ellipsis: 'DotGrid1x3HorizontalIcon',
  EllipsisVertical: 'DotGrid1x3VerticalIcon',
  MoreHorizontal: 'DotGrid1x3HorizontalIcon',
  MoreVertical: 'DotGrid1x3VerticalIcon',
  Copy: 'CopySimpleIcon',
  Clipboard: 'ClipboardIcon',
  ClipboardList: 'SquareChecklistIcon',
  GripVertical: 'DotGrid2x3VerticalIcon',
  PlusCircle: 'CirclePlusIcon',
  ArchiveX: 'ArchiveIcon',

  // User & Communication
  User: 'PersonSimpleIcon',
  User2: 'PersonSimpleIcon',
  CircleUser: 'CirclePersonIcon',
  Users: 'PeopleIcon',
  UserPlus: 'PeopleAddIcon',
  Bell: 'BellIcon',
  BellOff: 'BellOffIcon',
  BellRing: 'BellAlarmIcon',
  Mail: 'Email2Icon',
  MailOpen: 'Email3Icon',
  Send: 'SendIcon',
  MessageSquare: 'Bubble3Icon',
  Inbox: 'InboxEmptyIcon',

  // Navigation
  Menu: 'BarsThreeIcon',
  Home: 'HomeIcon',
  Calendar: 'Calendar1Icon',
  CalendarDays: 'CalendarDaysIcon',
  CalendarPlus: 'CalendarAdd4Icon',

  // Media
  Camera: 'Camera1Icon',
  Play: 'PlayIcon',
  Pause: 'PauseIcon',
  Volume2: 'VolumeFullIcon',
  VolumeX: 'VolumeOffIcon',
  Image: 'Images1Icon',
  Eye: 'EyeOpenIcon',
  EyeOff: 'EyeSlashIcon',
  AudioLines: 'AudioBarsIcon',

  // Theme & Feedback
  Moon: 'MoonIcon',
  Sun: 'SunIcon',
  SunDim: 'SunIcon',
  Heart: 'HeartIcon',
  Star: 'StarIcon',
  Bookmark: 'BookmarkIcon',
  Zap: 'ZapIcon',
  Sparkles: 'SparkleIcon',

  // Files & Folders
  File: 'FileBendIcon',
  FileText: 'FileTextIcon',
  Folder: 'Folder1Icon',
  FolderOpen: 'FolderOpenIcon',
  Download: 'ArrowInboxIcon',
  Upload: 'ArrowOutOfBoxIcon',
  Package2: 'PackageIcon',

  // Links & Security
  ExternalLink: 'SquareArrowTopRightIcon',
  Link: 'ChainLink1Icon',
  Link2: 'ChainLink2Icon',
  Lock: 'LockIcon',
  Unlock: 'UnlockedIcon',
  Globe: 'GlobusIcon',
  Phone: 'PhoneIcon',
  Smartphone: 'PhoneIcon',
  MapPin: 'MapPinIcon',
  Map: 'MapIcon',
  Cloud: 'CloudIcon',
  Code: 'CodeIcon',
  Code2: 'CodeBracketsIcon',

  // Loading & Refresh
  Loader: 'LoaderIcon',
  Loader2: 'LoaderIcon',
  RefreshCw: 'ArrowsRepeatCircleIcon',
  RefreshCcw: 'ArrowsRepeatCircleIcon',
  RotateCcw: 'ArrowRotateCounterClockwiseIcon',

  // Commerce
  CreditCard: 'CreditCard2Icon',
  ShoppingBag: 'ShoppingBag1Icon',
  Tag: 'TagIcon',
  Tags: 'TagIcon',
  Gift: 'Gift1Icon',
  Ticket: 'TicketIcon',

  // Layout
  LayoutDashboard: 'LayoutDashboardIcon',
  LayoutGrid: 'LayoutGrid1Icon',
  PanelLeft: 'SidebarSimpleLeftSquareIcon',
  Sidebar: 'SidebarIcon',
  AppWindow: 'WindowAppIcon',
  Frame: 'FrameSimpleIcon',
  Square: 'SquarePlaceholderIcon',
  SquareDashed: 'SquarePlaceholderDashedIcon',

  // Text & Formatting
  Quote: 'QuoteIcon',
  List: 'BulletListIcon',
  Bold: 'BoldIcon',
  Italic: 'ItalicIcon',
  Underline: 'UnderlineIcon',

  // Auth
  LogOut: 'ArrowBoxLeftIcon',
  LogIn: 'LoginIcon',

  // Devices
  Laptop: 'MacbookIcon',
  Monitor: 'ImacIcon',
  Tablet: 'PhoneIcon',

  // Charts & Data
  Activity: 'Trending1Icon',
  TrendingUp: 'Trending4Icon',
  TrendingDown: 'TrendingDownSimpleIcon',
  PieChart: 'PieChartIcon',
  LandPlot: 'LandPlotSimpleIcon',

  // Developer
  Command: 'CmdIcon',
  Terminal: 'ConsoleIcon',
  GitCommitVertical: 'GitCommitVerticalIcon',
  Slash: 'SlashForwardIcon',

  // Misc
  Bed: 'BedIcon',
  Bot: 'RobotIcon',
  Clock2: 'ClockIcon',
  CircleFadingArrowUp: 'ArrowUpCircleIcon',
  Dot: 'DotSmallIcon',
  Footprints: 'FootstepsIcon',
  GalleryHorizontalEnd: 'AlbumsIcon',
  GalleryVerticalEnd: 'AlbumsIcon',
  HelpCircle: 'CircleQuestionmarkIcon',
  LifeBuoy: 'RescueRingIcon',
  Popcorn: 'PopcornIcon',
  Waves: 'WavesSimpleIcon',
}
