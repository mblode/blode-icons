export interface IconMapping {
  blodeName: string;
  category: string;
  hasMatch: boolean;
  isChanged?: boolean;
  lucideName: string;
}

// Icons with hasMatch: false are approximate/placeholder mappings
// Icons with isChanged: true were updated in the latest round of fixes
export const mappings: IconMapping[] = [
  // Navigation & Chevrons
  {
    blodeName: "ChevronDownIcon",
    category: "Navigation",
    hasMatch: true,
    lucideName: "ChevronDown",
  },
  {
    blodeName: "ChevronUpIcon",
    category: "Navigation",
    hasMatch: true,
    lucideName: "ChevronUp",
  },
  {
    blodeName: "ChevronLeftIcon",
    category: "Navigation",
    hasMatch: true,
    lucideName: "ChevronLeft",
  },
  {
    blodeName: "ChevronRightIcon",
    category: "Navigation",
    hasMatch: true,
    lucideName: "ChevronRight",
  },
  {
    blodeName: "ChevronGrabberVerticalIcon",
    category: "Navigation",
    hasMatch: true,
    lucideName: "ChevronsUpDown",
  },
  {
    blodeName: "ArrowDownIcon",
    category: "Navigation",
    hasMatch: true,
    lucideName: "ArrowDown",
  },
  {
    blodeName: "ArrowUpIcon",
    category: "Navigation",
    hasMatch: true,
    lucideName: "ArrowUp",
  },
  {
    blodeName: "ArrowLeftIcon",
    category: "Navigation",
    hasMatch: true,
    lucideName: "ArrowLeft",
  },
  {
    blodeName: "ArrowRightIcon",
    category: "Navigation",
    hasMatch: true,
    lucideName: "ArrowRight",
  },
  {
    blodeName: "ArrowTopBottomIcon",
    category: "Navigation",
    hasMatch: true,
    lucideName: "ArrowUpDown",
  },
  {
    blodeName: "ArrowUpRightIcon",
    category: "Navigation",
    hasMatch: true,
    lucideName: "ArrowUpRight",
  },
  {
    blodeName: "ArrowDownLeftIcon",
    category: "Navigation",
    hasMatch: true,
    lucideName: "ArrowDownLeft",
  },
  {
    blodeName: "ArrowDownRightIcon",
    category: "Navigation",
    hasMatch: true,
    lucideName: "ArrowDownRight",
  },
  {
    blodeName: "ArrowUpLeftIcon",
    category: "Navigation",
    hasMatch: true,
    lucideName: "ArrowUpLeft",
  },
  {
    blodeName: "ArrowFromLineDownIcon",
    category: "Navigation",
    hasMatch: true,
    lucideName: "ArrowDownFromLine",
  },
  {
    blodeName: "ArrowFromLineUpIcon",
    category: "Navigation",
    hasMatch: true,
    lucideName: "ArrowUpFromLine",
  },
  {
    blodeName: "ArrowCornerDownLeftIcon",
    category: "Navigation",
    hasMatch: true,
    lucideName: "CornerDownLeft",
  },

  // Status & Validation
  {
    blodeName: "CheckIcon",
    category: "Status",
    hasMatch: true,
    lucideName: "Check",
  },
  {
    blodeName: "CircleCheckIcon",
    category: "Status",
    hasMatch: true,
    lucideName: "CheckCircle2",
  },
  {
    blodeName: "CircleCheckIcon",
    category: "Status",
    hasMatch: true,
    lucideName: "CircleCheck",
  },
  {
    blodeName: "CircleOutlineIcon",
    category: "Status",
    hasMatch: true,
    lucideName: "Circle",
  },
  {
    blodeName: "XIcon",
    category: "Status",
    hasMatch: true,
    lucideName: "X",
  },
  {
    blodeName: "CircleExclamationIcon",
    category: "Status",
    hasMatch: true,
    lucideName: "AlertCircle",
  },
  {
    blodeName: "CircleExclamationIcon",
    category: "Status",
    hasMatch: true,
    lucideName: "CircleAlert",
  },
  {
    blodeName: "TriangleExclamationIcon",
    category: "Status",
    hasMatch: true,
    lucideName: "AlertTriangle",
  },
  {
    blodeName: "TriangleExclamationIcon",
    category: "Status",
    hasMatch: true,
    lucideName: "TriangleAlert",
  },
  {
    blodeName: "InfoIcon",
    category: "Status",
    hasMatch: true,
    lucideName: "Info",
  },
  {
    blodeName: "CircleXIcon",
    category: "Status",
    hasMatch: true,
    lucideName: "CircleX",
  },
  {
    blodeName: "CircleQuestionmarkIcon",
    category: "Status",
    hasMatch: true,
    lucideName: "CircleHelp",
  },
  {
    blodeName: "VerifiedCheckIcon",
    category: "Status",
    hasMatch: true,
    lucideName: "BadgeCheck",
  },
  {
    blodeName: "ShieldBreakIcon",
    category: "Status",
    hasMatch: true,
    lucideName: "ShieldAlert",
  },

  // Actions & Controls
  {
    blodeName: "PlusLargeIcon",
    category: "Actions",
    hasMatch: true,
    lucideName: "Plus",
  },
  {
    blodeName: "MinusLargeIcon",
    category: "Actions",
    hasMatch: true,
    lucideName: "Minus",
  },
  {
    blodeName: "MagnifyingGlassIcon",
    category: "Actions",
    hasMatch: true,
    lucideName: "Search",
  },
  {
    blodeName: "Filter1Icon",
    category: "Actions",
    hasMatch: true,
    lucideName: "Filter",
  },
  {
    blodeName: "SettingsGear1Icon",
    category: "Actions",
    hasMatch: true,
    lucideName: "Settings",
  },
  {
    blodeName: "SettingsSliderHorIcon",
    category: "Actions",
    hasMatch: true,
    lucideName: "Settings2",
  },
  {
    blodeName: "PencilIcon",
    category: "Actions",
    hasMatch: true,
    lucideName: "Pencil",
  },
  {
    blodeName: "TrashCan2Icon",
    category: "Actions",
    hasMatch: true,
    lucideName: "Trash",
  },
  {
    blodeName: "TrashCan2Icon",
    category: "Actions",
    hasMatch: true,
    lucideName: "Trash2",
  },
  {
    blodeName: "DotGrid1x3HorizontalIcon",
    category: "Actions",
    hasMatch: true,
    lucideName: "Ellipsis",
  },
  {
    blodeName: "DotGrid1x3VerticalIcon",
    category: "Actions",
    hasMatch: true,
    lucideName: "EllipsisVertical",
  },
  {
    blodeName: "DotGrid1x3HorizontalIcon",
    category: "Actions",
    hasMatch: true,
    lucideName: "MoreHorizontal",
  },
  {
    blodeName: "DotGrid1x3VerticalIcon",
    category: "Actions",
    hasMatch: true,
    lucideName: "MoreVertical",
  },
  {
    blodeName: "CopySimpleIcon",
    category: "Actions",
    hasMatch: true,
    lucideName: "Copy",
  },
  {
    blodeName: "ClipboardIcon",
    category: "Actions",
    hasMatch: true,
    lucideName: "Clipboard",
  },
  {
    blodeName: "SquareChecklistIcon",
    category: "Actions",
    hasMatch: true,
    lucideName: "ClipboardList",
  },
  {
    blodeName: "DotGrid2x3VerticalIcon",
    category: "Actions",
    hasMatch: true,
    lucideName: "GripVertical",
  },
  {
    blodeName: "CirclePlusIcon",
    category: "Actions",
    hasMatch: true,
    lucideName: "PlusCircle",
  },
  {
    blodeName: "ArchiveIcon",
    category: "Actions",
    hasMatch: true,
    lucideName: "ArchiveX",
  },

  // User & Communication
  {
    blodeName: "PersonSimpleIcon",
    category: "User",
    hasMatch: true,
    lucideName: "User",
  },
  {
    blodeName: "PersonSimpleIcon",
    category: "User",
    hasMatch: true,
    lucideName: "User2",
  },
  {
    blodeName: "CirclePersonIcon",
    category: "User",
    hasMatch: true,
    lucideName: "CircleUser",
  },
  {
    blodeName: "PeopleIcon",
    category: "User",
    hasMatch: true,
    lucideName: "Users",
  },
  {
    blodeName: "PeopleAddIcon",
    category: "User",
    hasMatch: true,
    lucideName: "UserPlus",
  },
  {
    blodeName: "BellIcon",
    category: "User",
    hasMatch: true,
    lucideName: "Bell",
  },
  {
    blodeName: "BellOffIcon",
    category: "User",
    hasMatch: true,
    lucideName: "BellOff",
  },
  {
    blodeName: "BellAlarmIcon",
    category: "User",
    hasMatch: true,
    lucideName: "BellRing",
  },
  {
    blodeName: "Email2Icon",
    category: "User",
    hasMatch: true,
    lucideName: "Mail",
  },
  {
    blodeName: "Email3Icon",
    category: "User",
    hasMatch: true,
    lucideName: "MailOpen",
  },
  {
    blodeName: "SendIcon",
    category: "User",
    hasMatch: true,
    lucideName: "Send",
  },
  {
    blodeName: "Bubble3Icon",
    category: "User",
    hasMatch: true,
    lucideName: "MessageSquare",
  },
  {
    blodeName: "InboxEmptyIcon",
    category: "User",
    hasMatch: true,
    lucideName: "Inbox",
  },

  // Navigation
  {
    blodeName: "BarsThreeIcon",
    category: "Navigation",
    hasMatch: true,
    lucideName: "Menu",
  },
  {
    blodeName: "HomeIcon",
    category: "Navigation",
    hasMatch: true,
    lucideName: "Home",
  },
  {
    blodeName: "Calendar1Icon",
    category: "Navigation",
    hasMatch: true,
    lucideName: "Calendar",
  },
  {
    blodeName: "CalendarDaysIcon",
    category: "Navigation",
    hasMatch: true,
    lucideName: "CalendarDays",
  },
  {
    blodeName: "CalendarAdd4Icon",
    category: "Navigation",
    hasMatch: true,
    lucideName: "CalendarPlus",
  },

  // Media
  {
    blodeName: "Camera1Icon",
    category: "Media",
    hasMatch: true,
    lucideName: "Camera",
  },
  {
    blodeName: "PlayIcon",
    category: "Media",
    hasMatch: true,
    lucideName: "Play",
  },
  {
    blodeName: "PauseIcon",
    category: "Media",
    hasMatch: true,
    lucideName: "Pause",
  },
  {
    blodeName: "VolumeFullIcon",
    category: "Media",
    hasMatch: true,
    lucideName: "Volume2",
  },
  {
    blodeName: "VolumeOffIcon",
    category: "Media",
    hasMatch: true,
    lucideName: "VolumeX",
  },
  {
    blodeName: "Images1Icon",
    category: "Media",
    hasMatch: true,
    lucideName: "Image",
  },
  {
    blodeName: "EyeOpenIcon",
    category: "Media",
    hasMatch: true,
    lucideName: "Eye",
  },
  {
    blodeName: "EyeSlashIcon",
    category: "Media",
    hasMatch: true,
    lucideName: "EyeOff",
  },
  {
    blodeName: "AudioBarsIcon",
    category: "Media",
    hasMatch: true,
    lucideName: "AudioLines",
  },

  // Theme & Feedback
  {
    blodeName: "MoonIcon",
    category: "Theme",
    hasMatch: true,
    lucideName: "Moon",
  },
  {
    blodeName: "SunIcon",
    category: "Theme",
    hasMatch: true,
    lucideName: "Sun",
  },
  {
    blodeName: "SunIcon",
    category: "Theme",
    hasMatch: true,
    lucideName: "SunDim",
  },
  {
    blodeName: "HeartIcon",
    category: "Theme",
    hasMatch: true,
    lucideName: "Heart",
  },
  {
    blodeName: "StarIcon",
    category: "Theme",
    hasMatch: true,
    lucideName: "Star",
  },
  {
    blodeName: "BookmarkIcon",
    category: "Theme",
    hasMatch: true,
    lucideName: "Bookmark",
  },
  {
    blodeName: "ZapIcon",
    category: "Theme",
    hasMatch: true,
    lucideName: "Zap",
  },
  {
    blodeName: "SparkleIcon",
    category: "Theme",
    hasMatch: true,
    lucideName: "Sparkles",
  },

  // Files & Folders
  {
    blodeName: "FileBendIcon",
    category: "Files",
    hasMatch: true,
    lucideName: "File",
  },
  {
    blodeName: "FileTextIcon",
    category: "Files",
    hasMatch: true,
    lucideName: "FileText",
  },
  {
    blodeName: "Folder1Icon",
    category: "Files",
    hasMatch: true,
    lucideName: "Folder",
  },
  {
    blodeName: "FolderOpenIcon",
    category: "Files",
    hasMatch: true,
    lucideName: "FolderOpen",
  },
  {
    blodeName: "ArrowInboxIcon",
    category: "Files",
    hasMatch: true,
    isChanged: true,
    lucideName: "Download",
  },
  {
    blodeName: "ArrowOutOfBoxIcon",
    category: "Files",
    hasMatch: true,
    isChanged: true,
    lucideName: "Upload",
  },
  {
    blodeName: "PackageIcon",
    category: "Files",
    hasMatch: true,
    lucideName: "Package2",
  },

  // Links & Security
  {
    blodeName: "SquareArrowTopRightIcon",
    category: "Links",
    hasMatch: true,
    lucideName: "ExternalLink",
  },
  {
    blodeName: "ChainLink1Icon",
    category: "Links",
    hasMatch: true,
    lucideName: "Link",
  },
  {
    blodeName: "ChainLink2Icon",
    category: "Links",
    hasMatch: true,
    lucideName: "Link2",
  },
  {
    blodeName: "LockIcon",
    category: "Links",
    hasMatch: true,
    lucideName: "Lock",
  },
  {
    blodeName: "UnlockedIcon",
    category: "Links",
    hasMatch: true,
    lucideName: "Unlock",
  },
  {
    blodeName: "GlobusIcon",
    category: "Links",
    hasMatch: true,
    lucideName: "Globe",
  },
  {
    blodeName: "PhoneIcon",
    category: "Links",
    hasMatch: true,
    lucideName: "Phone",
  },
  {
    blodeName: "PhoneIcon",
    category: "Links",
    hasMatch: true,
    lucideName: "Smartphone",
  },
  {
    blodeName: "MapPinIcon",
    category: "Links",
    hasMatch: true,
    lucideName: "MapPin",
  },
  {
    blodeName: "MapIcon",
    category: "Links",
    hasMatch: true,
    lucideName: "Map",
  },
  {
    blodeName: "CloudIcon",
    category: "Links",
    hasMatch: true,
    lucideName: "Cloud",
  },
  {
    blodeName: "CodeIcon",
    category: "Developer",
    hasMatch: true,
    lucideName: "Code",
  },
  {
    blodeName: "CodeBracketsIcon",
    category: "Developer",
    hasMatch: true,
    lucideName: "Code2",
  },

  // Loading & Refresh
  {
    blodeName: "LoaderIcon",
    category: "Loading",
    hasMatch: true,
    lucideName: "Loader",
  },
  {
    blodeName: "LoaderIcon",
    category: "Loading",
    hasMatch: true,
    lucideName: "Loader2",
  },
  {
    blodeName: "ArrowsRepeatCircleIcon",
    category: "Loading",
    hasMatch: true,
    lucideName: "RefreshCw",
  },
  {
    blodeName: "ArrowsRepeatCircleIcon",
    category: "Loading",
    hasMatch: true,
    isChanged: true,
    lucideName: "RefreshCcw",
  },
  {
    blodeName: "ArrowRotateCounterClockwiseIcon",
    category: "Loading",
    hasMatch: true,
    lucideName: "RotateCcw",
  },

  // Commerce
  {
    blodeName: "CreditCard2Icon",
    category: "Commerce",
    hasMatch: true,
    lucideName: "CreditCard",
  },
  {
    blodeName: "ShoppingBag1Icon",
    category: "Commerce",
    hasMatch: true,
    lucideName: "ShoppingBag",
  },
  {
    blodeName: "TagIcon",
    category: "Commerce",
    hasMatch: true,
    lucideName: "Tag",
  },
  {
    blodeName: "TagIcon",
    category: "Commerce",
    hasMatch: true,
    lucideName: "Tags",
  },
  {
    blodeName: "Gift1Icon",
    category: "Commerce",
    hasMatch: true,
    lucideName: "Gift",
  },
  {
    blodeName: "TicketIcon",
    category: "Commerce",
    hasMatch: true,
    lucideName: "Ticket",
  },

  // Layout
  {
    blodeName: "LayoutDashboardIcon",
    category: "Layout",
    hasMatch: true,
    lucideName: "LayoutDashboard",
  },
  {
    blodeName: "LayoutGrid1Icon",
    category: "Layout",
    hasMatch: true,
    lucideName: "LayoutGrid",
  },
  {
    blodeName: "SidebarSimpleLeftSquareIcon",
    category: "Layout",
    hasMatch: true,
    lucideName: "PanelLeft",
  },
  {
    blodeName: "SidebarIcon",
    category: "Layout",
    hasMatch: true,
    lucideName: "Sidebar",
  },
  {
    blodeName: "WindowAppIcon",
    category: "Layout",
    hasMatch: true,
    lucideName: "AppWindow",
  },
  {
    blodeName: "FrameSimpleIcon",
    category: "Layout",
    hasMatch: true,
    isChanged: true,
    lucideName: "Frame",
  },
  {
    blodeName: "SquarePlaceholderIcon",
    category: "Layout",
    hasMatch: true,
    lucideName: "Square",
  },
  {
    blodeName: "SquarePlaceholderDashedIcon",
    category: "Layout",
    hasMatch: true,
    lucideName: "SquareDashed",
  },

  // Text & Formatting
  {
    blodeName: "QuoteIcon",
    category: "Text",
    hasMatch: true,
    lucideName: "Quote",
  },
  {
    blodeName: "BulletListIcon",
    category: "Text",
    hasMatch: true,
    lucideName: "List",
  },
  {
    blodeName: "BoldIcon",
    category: "Text",
    hasMatch: true,
    lucideName: "Bold",
  },
  {
    blodeName: "ItalicIcon",
    category: "Text",
    hasMatch: true,
    lucideName: "Italic",
  },
  {
    blodeName: "UnderlineIcon",
    category: "Text",
    hasMatch: true,
    lucideName: "Underline",
  },

  // Auth
  {
    blodeName: "ArrowBoxLeftIcon",
    category: "Auth",
    hasMatch: true,
    isChanged: true,
    lucideName: "LogOut",
  },
  {
    blodeName: "LoginIcon",
    category: "Auth",
    hasMatch: true,
    isChanged: true,
    lucideName: "LogIn",
  },

  // Devices
  {
    blodeName: "MacbookIcon",
    category: "Devices",
    hasMatch: true,
    lucideName: "Laptop",
  },
  {
    blodeName: "ImacIcon",
    category: "Devices",
    hasMatch: true,
    lucideName: "Monitor",
  },
  {
    blodeName: "PhoneIcon",
    category: "Devices",
    hasMatch: true,
    lucideName: "Tablet",
  },

  // Charts & Data
  {
    blodeName: "Trending1Icon",
    category: "Charts",
    hasMatch: true,
    lucideName: "Activity",
  },
  {
    blodeName: "Trending4Icon",
    category: "Charts",
    hasMatch: true,
    lucideName: "TrendingUp",
  },
  {
    blodeName: "TrendingDownSimpleIcon",
    category: "Charts",
    hasMatch: true,
    isChanged: true,
    lucideName: "TrendingDown",
  },
  {
    blodeName: "PieChartIcon",
    category: "Charts",
    hasMatch: true,
    lucideName: "PieChart",
  },
  {
    blodeName: "LandPlotSimpleIcon",
    category: "Charts",
    hasMatch: true,
    isChanged: true,
    lucideName: "LandPlot",
  },

  // Developer
  {
    blodeName: "CmdIcon",
    category: "Developer",
    hasMatch: true,
    lucideName: "Command",
  },
  {
    blodeName: "ConsoleIcon",
    category: "Developer",
    hasMatch: true,
    lucideName: "Terminal",
  },
  {
    blodeName: "GitCommitVerticalIcon",
    category: "Developer",
    hasMatch: true,
    isChanged: true,
    lucideName: "GitCommitVertical",
  },
  {
    blodeName: "SlashForwardIcon",
    category: "Developer",
    hasMatch: true,
    isChanged: true,
    lucideName: "Slash",
  },

  // Misc
  {
    blodeName: "BedIcon",
    category: "Misc",
    hasMatch: true,
    lucideName: "Bed",
  },
  {
    blodeName: "RobotIcon",
    category: "Misc",
    hasMatch: true,
    lucideName: "Bot",
  },
  {
    blodeName: "ClockIcon",
    category: "Misc",
    hasMatch: true,
    lucideName: "Clock2",
  },
  {
    blodeName: "ArrowUpCircleIcon",
    category: "Misc",
    hasMatch: true,
    lucideName: "CircleFadingArrowUp",
  },
  {
    blodeName: "DotSmallIcon",
    category: "Misc",
    hasMatch: true,
    isChanged: true,
    lucideName: "Dot",
  },
  {
    blodeName: "FootstepsIcon",
    category: "Misc",
    hasMatch: true,
    lucideName: "Footprints",
  },
  {
    blodeName: "AlbumsIcon",
    category: "Misc",
    hasMatch: true,
    lucideName: "GalleryHorizontalEnd",
  },
  {
    blodeName: "AlbumsIcon",
    category: "Misc",
    hasMatch: true,
    lucideName: "GalleryVerticalEnd",
  },
  {
    blodeName: "CircleQuestionmarkIcon",
    category: "Misc",
    hasMatch: true,
    lucideName: "HelpCircle",
  },
  {
    blodeName: "RescueRingIcon",
    category: "Misc",
    hasMatch: true,
    lucideName: "LifeBuoy",
  },
  {
    blodeName: "PopcornIcon",
    category: "Misc",
    hasMatch: true,
    lucideName: "Popcorn",
  },
  {
    blodeName: "WavesSimpleIcon",
    category: "Misc",
    hasMatch: true,
    isChanged: true,
    lucideName: "Waves",
  },
  {
    blodeName: "CircleXIcon",
    category: "Status",
    hasMatch: true,
    lucideName: "OctagonX",
  },
];

export const categories = [...new Set(mappings.map((m) => m.category))];
