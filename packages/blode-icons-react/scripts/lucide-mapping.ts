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
    lucideName: "ChevronDown",
    blodeName: "ChevronDownIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "ChevronUp",
    blodeName: "ChevronUpIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "ChevronLeft",
    blodeName: "ChevronLeftIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "ChevronRight",
    blodeName: "ChevronRightIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "ChevronsUpDown",
    blodeName: "ChevronGrabberVerticalIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "ArrowDown",
    blodeName: "ArrowDownIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "ArrowUp",
    blodeName: "ArrowUpIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "ArrowLeft",
    blodeName: "ArrowLeftIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "ArrowRight",
    blodeName: "ArrowRightIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "ArrowUpDown",
    blodeName: "ArrowTopBottomIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "ArrowUpRight",
    blodeName: "ArrowUpRightIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "ArrowDownLeft",
    blodeName: "ArrowDownLeftIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "ArrowDownRight",
    blodeName: "ArrowDownRightIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "ArrowUpLeft",
    blodeName: "ArrowUpLeftIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "ArrowDownFromLine",
    blodeName: "ArrowFromLineDownIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "ArrowUpFromLine",
    blodeName: "ArrowFromLineUpIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "CornerDownLeft",
    blodeName: "ArrowCornerDownLeftIcon",
    category: "Navigation",
    hasMatch: true,
  },

  // Status & Validation
  {
    lucideName: "Check",
    blodeName: "CheckIcon",
    category: "Status",
    hasMatch: true,
  },
  {
    lucideName: "CheckCircle2",
    blodeName: "CircleCheckIcon",
    category: "Status",
    hasMatch: true,
  },
  {
    lucideName: "CircleCheck",
    blodeName: "CircleCheckIcon",
    category: "Status",
    hasMatch: true,
  },
  {
    lucideName: "Circle",
    blodeName: "CircleOutlineIcon",
    category: "Status",
    hasMatch: true,
  },
  {
    lucideName: "X",
    blodeName: "CrossLargeIcon",
    category: "Status",
    hasMatch: true,
  },
  {
    lucideName: "AlertCircle",
    blodeName: "CircleExclamationIcon",
    category: "Status",
    hasMatch: true,
  },
  {
    lucideName: "CircleAlert",
    blodeName: "CircleExclamationIcon",
    category: "Status",
    hasMatch: true,
  },
  {
    lucideName: "AlertTriangle",
    blodeName: "TriangleExclamationIcon",
    category: "Status",
    hasMatch: true,
  },
  {
    lucideName: "TriangleAlert",
    blodeName: "TriangleExclamationIcon",
    category: "Status",
    hasMatch: true,
  },
  {
    lucideName: "Info",
    blodeName: "InfoIcon",
    category: "Status",
    hasMatch: true,
  },
  {
    lucideName: "CircleX",
    blodeName: "CircleXIcon",
    category: "Status",
    hasMatch: true,
  },
  {
    lucideName: "CircleHelp",
    blodeName: "CircleQuestionmarkIcon",
    category: "Status",
    hasMatch: true,
  },
  {
    lucideName: "BadgeCheck",
    blodeName: "VerifiedCheckIcon",
    category: "Status",
    hasMatch: true,
  },
  {
    lucideName: "ShieldAlert",
    blodeName: "ShieldBreakIcon",
    category: "Status",
    hasMatch: true,
  },

  // Actions & Controls
  {
    lucideName: "Plus",
    blodeName: "PlusLargeIcon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "Minus",
    blodeName: "MinusLargeIcon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "Search",
    blodeName: "MagnifyingGlassIcon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "Filter",
    blodeName: "Filter1Icon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "Settings",
    blodeName: "SettingsGear1Icon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "Settings2",
    blodeName: "SettingsSliderHorIcon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "Pencil",
    blodeName: "PencilIcon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "Trash",
    blodeName: "TrashCan2Icon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "Trash2",
    blodeName: "TrashCan2Icon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "Ellipsis",
    blodeName: "DotGrid1x3HorizontalIcon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "EllipsisVertical",
    blodeName: "DotGrid1x3VerticalIcon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "MoreHorizontal",
    blodeName: "DotGrid1x3HorizontalIcon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "MoreVertical",
    blodeName: "DotGrid1x3VerticalIcon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "Copy",
    blodeName: "CopySimpleIcon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "Clipboard",
    blodeName: "ClipboardIcon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "ClipboardList",
    blodeName: "SquareChecklistIcon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "GripVertical",
    blodeName: "DotGrid2x3VerticalIcon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "PlusCircle",
    blodeName: "CirclePlusIcon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "ArchiveX",
    blodeName: "ArchiveIcon",
    category: "Actions",
    hasMatch: true,
  },

  // User & Communication
  {
    lucideName: "User",
    blodeName: "PersonSimpleIcon",
    category: "User",
    hasMatch: true,
  },
  {
    lucideName: "User2",
    blodeName: "PersonSimpleIcon",
    category: "User",
    hasMatch: true,
  },
  {
    lucideName: "CircleUser",
    blodeName: "CirclePersonIcon",
    category: "User",
    hasMatch: true,
  },
  {
    lucideName: "Users",
    blodeName: "PeopleIcon",
    category: "User",
    hasMatch: true,
  },
  {
    lucideName: "UserPlus",
    blodeName: "PeopleAddIcon",
    category: "User",
    hasMatch: true,
  },
  {
    lucideName: "Bell",
    blodeName: "BellIcon",
    category: "User",
    hasMatch: true,
  },
  {
    lucideName: "BellOff",
    blodeName: "BellOffIcon",
    category: "User",
    hasMatch: true,
  },
  {
    lucideName: "BellRing",
    blodeName: "BellAlarmIcon",
    category: "User",
    hasMatch: true,
  },
  {
    lucideName: "Mail",
    blodeName: "Email2Icon",
    category: "User",
    hasMatch: true,
  },
  {
    lucideName: "MailOpen",
    blodeName: "Email3Icon",
    category: "User",
    hasMatch: true,
  },
  {
    lucideName: "Send",
    blodeName: "SendIcon",
    category: "User",
    hasMatch: true,
  },
  {
    lucideName: "MessageSquare",
    blodeName: "Bubble3Icon",
    category: "User",
    hasMatch: true,
  },
  {
    lucideName: "Inbox",
    blodeName: "InboxEmptyIcon",
    category: "User",
    hasMatch: true,
  },

  // Navigation
  {
    lucideName: "Menu",
    blodeName: "BarsThreeIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "Home",
    blodeName: "HomeIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "Calendar",
    blodeName: "Calendar1Icon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "CalendarDays",
    blodeName: "CalendarDaysIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "CalendarPlus",
    blodeName: "CalendarAdd4Icon",
    category: "Navigation",
    hasMatch: true,
  },

  // Media
  {
    lucideName: "Camera",
    blodeName: "Camera1Icon",
    category: "Media",
    hasMatch: true,
  },
  {
    lucideName: "Play",
    blodeName: "PlayIcon",
    category: "Media",
    hasMatch: true,
  },
  {
    lucideName: "Pause",
    blodeName: "PauseIcon",
    category: "Media",
    hasMatch: true,
  },
  {
    lucideName: "Volume2",
    blodeName: "VolumeFullIcon",
    category: "Media",
    hasMatch: true,
  },
  {
    lucideName: "VolumeX",
    blodeName: "VolumeOffIcon",
    category: "Media",
    hasMatch: true,
  },
  {
    lucideName: "Image",
    blodeName: "Images1Icon",
    category: "Media",
    hasMatch: true,
  },
  {
    lucideName: "Eye",
    blodeName: "EyeOpenIcon",
    category: "Media",
    hasMatch: true,
  },
  {
    lucideName: "EyeOff",
    blodeName: "EyeSlashIcon",
    category: "Media",
    hasMatch: true,
  },
  {
    lucideName: "AudioLines",
    blodeName: "AudioBarsIcon",
    category: "Media",
    hasMatch: true,
  },

  // Theme & Feedback
  {
    lucideName: "Moon",
    blodeName: "MoonIcon",
    category: "Theme",
    hasMatch: true,
  },
  {
    lucideName: "Sun",
    blodeName: "SunIcon",
    category: "Theme",
    hasMatch: true,
  },
  {
    lucideName: "SunDim",
    blodeName: "SunIcon",
    category: "Theme",
    hasMatch: true,
  },
  {
    lucideName: "Heart",
    blodeName: "HeartIcon",
    category: "Theme",
    hasMatch: true,
  },
  {
    lucideName: "Star",
    blodeName: "StarIcon",
    category: "Theme",
    hasMatch: true,
  },
  {
    lucideName: "Bookmark",
    blodeName: "BookmarkIcon",
    category: "Theme",
    hasMatch: true,
  },
  {
    lucideName: "Zap",
    blodeName: "ZapIcon",
    category: "Theme",
    hasMatch: true,
  },
  {
    lucideName: "Sparkles",
    blodeName: "SparkleIcon",
    category: "Theme",
    hasMatch: true,
  },

  // Files & Folders
  {
    lucideName: "File",
    blodeName: "FileBendIcon",
    category: "Files",
    hasMatch: true,
  },
  {
    lucideName: "FileText",
    blodeName: "FileTextIcon",
    category: "Files",
    hasMatch: true,
  },
  {
    lucideName: "Folder",
    blodeName: "Folder1Icon",
    category: "Files",
    hasMatch: true,
  },
  {
    lucideName: "FolderOpen",
    blodeName: "FolderOpenIcon",
    category: "Files",
    hasMatch: true,
  },
  {
    lucideName: "Download",
    blodeName: "ArrowInboxIcon",
    category: "Files",
    hasMatch: true,
    isChanged: true,
  },
  {
    lucideName: "Upload",
    blodeName: "ArrowOutOfBoxIcon",
    category: "Files",
    hasMatch: true,
    isChanged: true,
  },
  {
    lucideName: "Package2",
    blodeName: "PackageIcon",
    category: "Files",
    hasMatch: true,
  },

  // Links & Security
  {
    lucideName: "ExternalLink",
    blodeName: "SquareArrowTopRightIcon",
    category: "Links",
    hasMatch: true,
  },
  {
    lucideName: "Link",
    blodeName: "ChainLink1Icon",
    category: "Links",
    hasMatch: true,
  },
  {
    lucideName: "Link2",
    blodeName: "ChainLink2Icon",
    category: "Links",
    hasMatch: true,
  },
  {
    lucideName: "Lock",
    blodeName: "LockIcon",
    category: "Links",
    hasMatch: true,
  },
  {
    lucideName: "Unlock",
    blodeName: "UnlockedIcon",
    category: "Links",
    hasMatch: true,
  },
  {
    lucideName: "Globe",
    blodeName: "GlobusIcon",
    category: "Links",
    hasMatch: true,
  },
  {
    lucideName: "Phone",
    blodeName: "PhoneIcon",
    category: "Links",
    hasMatch: true,
  },
  {
    lucideName: "Smartphone",
    blodeName: "PhoneIcon",
    category: "Links",
    hasMatch: true,
  },
  {
    lucideName: "MapPin",
    blodeName: "MapPinIcon",
    category: "Links",
    hasMatch: true,
  },
  {
    lucideName: "Map",
    blodeName: "MapIcon",
    category: "Links",
    hasMatch: true,
  },
  {
    lucideName: "Cloud",
    blodeName: "CloudIcon",
    category: "Links",
    hasMatch: true,
  },
  {
    lucideName: "Code",
    blodeName: "CodeIcon",
    category: "Developer",
    hasMatch: true,
  },
  {
    lucideName: "Code2",
    blodeName: "CodeBracketsIcon",
    category: "Developer",
    hasMatch: true,
  },

  // Loading & Refresh
  {
    lucideName: "Loader",
    blodeName: "LoaderIcon",
    category: "Loading",
    hasMatch: true,
  },
  {
    lucideName: "Loader2",
    blodeName: "LoaderIcon",
    category: "Loading",
    hasMatch: true,
  },
  {
    lucideName: "RefreshCw",
    blodeName: "ArrowsRepeatCircleIcon",
    category: "Loading",
    hasMatch: true,
  },
  {
    lucideName: "RefreshCcw",
    blodeName: "ArrowsRepeatCircleIcon",
    category: "Loading",
    hasMatch: true,
    isChanged: true,
  },
  {
    lucideName: "RotateCcw",
    blodeName: "ArrowRotateCounterClockwiseIcon",
    category: "Loading",
    hasMatch: true,
  },

  // Commerce
  {
    lucideName: "CreditCard",
    blodeName: "CreditCard2Icon",
    category: "Commerce",
    hasMatch: true,
  },
  {
    lucideName: "ShoppingBag",
    blodeName: "ShoppingBag1Icon",
    category: "Commerce",
    hasMatch: true,
  },
  {
    lucideName: "Tag",
    blodeName: "TagIcon",
    category: "Commerce",
    hasMatch: true,
  },
  {
    lucideName: "Tags",
    blodeName: "TagIcon",
    category: "Commerce",
    hasMatch: true,
  },
  {
    lucideName: "Gift",
    blodeName: "Gift1Icon",
    category: "Commerce",
    hasMatch: true,
  },
  {
    lucideName: "Ticket",
    blodeName: "TicketIcon",
    category: "Commerce",
    hasMatch: true,
  },

  // Layout
  {
    lucideName: "LayoutDashboard",
    blodeName: "LayoutDashboardIcon",
    category: "Layout",
    hasMatch: true,
  },
  {
    lucideName: "LayoutGrid",
    blodeName: "LayoutGrid1Icon",
    category: "Layout",
    hasMatch: true,
  },
  {
    lucideName: "PanelLeft",
    blodeName: "SidebarSimpleLeftSquareIcon",
    category: "Layout",
    hasMatch: true,
  },
  {
    lucideName: "Sidebar",
    blodeName: "SidebarIcon",
    category: "Layout",
    hasMatch: true,
  },
  {
    lucideName: "AppWindow",
    blodeName: "WindowAppIcon",
    category: "Layout",
    hasMatch: true,
  },
  {
    lucideName: "Frame",
    blodeName: "FrameSimpleIcon",
    category: "Layout",
    hasMatch: true,
    isChanged: true,
  },
  {
    lucideName: "Square",
    blodeName: "SquarePlaceholderIcon",
    category: "Layout",
    hasMatch: true,
  },
  {
    lucideName: "SquareDashed",
    blodeName: "SquarePlaceholderDashedIcon",
    category: "Layout",
    hasMatch: true,
  },

  // Text & Formatting
  {
    lucideName: "Quote",
    blodeName: "QuoteIcon",
    category: "Text",
    hasMatch: true,
  },
  {
    lucideName: "List",
    blodeName: "BulletListIcon",
    category: "Text",
    hasMatch: true,
  },
  {
    lucideName: "Bold",
    blodeName: "BoldIcon",
    category: "Text",
    hasMatch: true,
  },
  {
    lucideName: "Italic",
    blodeName: "ItalicIcon",
    category: "Text",
    hasMatch: true,
  },
  {
    lucideName: "Underline",
    blodeName: "UnderlineIcon",
    category: "Text",
    hasMatch: true,
  },

  // Auth
  {
    lucideName: "LogOut",
    blodeName: "ArrowBoxLeftIcon",
    category: "Auth",
    hasMatch: true,
    isChanged: true,
  },
  {
    lucideName: "LogIn",
    blodeName: "LoginIcon",
    category: "Auth",
    hasMatch: true,
    isChanged: true,
  },

  // Devices
  {
    lucideName: "Laptop",
    blodeName: "MacbookIcon",
    category: "Devices",
    hasMatch: true,
  },
  {
    lucideName: "Monitor",
    blodeName: "ImacIcon",
    category: "Devices",
    hasMatch: true,
  },
  {
    lucideName: "Tablet",
    blodeName: "PhoneIcon",
    category: "Devices",
    hasMatch: true,
  },

  // Charts & Data
  {
    lucideName: "Activity",
    blodeName: "Trending1Icon",
    category: "Charts",
    hasMatch: true,
  },
  {
    lucideName: "TrendingUp",
    blodeName: "Trending4Icon",
    category: "Charts",
    hasMatch: true,
  },
  {
    lucideName: "TrendingDown",
    blodeName: "TrendingDownSimpleIcon",
    category: "Charts",
    hasMatch: true,
    isChanged: true,
  },
  {
    lucideName: "PieChart",
    blodeName: "PieChartIcon",
    category: "Charts",
    hasMatch: true,
  },
  {
    lucideName: "LandPlot",
    blodeName: "LandPlotSimpleIcon",
    category: "Charts",
    hasMatch: true,
    isChanged: true,
  },

  // Developer
  {
    lucideName: "Command",
    blodeName: "CmdIcon",
    category: "Developer",
    hasMatch: true,
  },
  {
    lucideName: "Terminal",
    blodeName: "ConsoleIcon",
    category: "Developer",
    hasMatch: true,
  },
  {
    lucideName: "GitCommitVertical",
    blodeName: "GitCommitVerticalIcon",
    category: "Developer",
    hasMatch: true,
    isChanged: true,
  },
  {
    lucideName: "Slash",
    blodeName: "SlashForwardIcon",
    category: "Developer",
    hasMatch: true,
    isChanged: true,
  },

  // Misc
  {
    lucideName: "Bed",
    blodeName: "BedIcon",
    category: "Misc",
    hasMatch: true,
  },
  {
    lucideName: "Bot",
    blodeName: "RobotIcon",
    category: "Misc",
    hasMatch: true,
  },
  {
    lucideName: "Clock2",
    blodeName: "ClockIcon",
    category: "Misc",
    hasMatch: true,
  },
  {
    lucideName: "CircleFadingArrowUp",
    blodeName: "ArrowUpCircleIcon",
    category: "Misc",
    hasMatch: true,
  },
  {
    lucideName: "Dot",
    blodeName: "DotSmallIcon",
    category: "Misc",
    hasMatch: true,
    isChanged: true,
  },
  {
    lucideName: "Footprints",
    blodeName: "FootstepsIcon",
    category: "Misc",
    hasMatch: true,
  },
  {
    lucideName: "GalleryHorizontalEnd",
    blodeName: "AlbumsIcon",
    category: "Misc",
    hasMatch: true,
  },
  {
    lucideName: "GalleryVerticalEnd",
    blodeName: "AlbumsIcon",
    category: "Misc",
    hasMatch: true,
  },
  {
    lucideName: "HelpCircle",
    blodeName: "CircleQuestionmarkIcon",
    category: "Misc",
    hasMatch: true,
  },
  {
    lucideName: "LifeBuoy",
    blodeName: "RescueRingIcon",
    category: "Misc",
    hasMatch: true,
  },
  {
    lucideName: "Popcorn",
    blodeName: "PopcornIcon",
    category: "Misc",
    hasMatch: true,
  },
  {
    lucideName: "Waves",
    blodeName: "WavesSimpleIcon",
    category: "Misc",
    hasMatch: true,
    isChanged: true,
  },
  {
    lucideName: "OctagonX",
    blodeName: "CircleXIcon",
    category: "Status",
    hasMatch: true,
  },
];

export const categories = [...new Set(mappings.map((m) => m.category))];
