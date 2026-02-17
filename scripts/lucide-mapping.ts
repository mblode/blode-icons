export interface IconMapping {
  category: string;
  fingertipName: string;
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
    fingertipName: "ChevronDownIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "ChevronUp",
    fingertipName: "ChevronUpIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "ChevronLeft",
    fingertipName: "ChevronLeftIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "ChevronRight",
    fingertipName: "ChevronRightIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "ChevronsUpDown",
    fingertipName: "ChevronGrabberVerticalIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "ArrowDown",
    fingertipName: "ArrowDownIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "ArrowUp",
    fingertipName: "ArrowUpIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "ArrowLeft",
    fingertipName: "ArrowLeftIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "ArrowRight",
    fingertipName: "ArrowRightIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "ArrowUpDown",
    fingertipName: "ArrowTopBottomIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "ArrowUpRight",
    fingertipName: "ArrowUpRightIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "ArrowDownLeft",
    fingertipName: "ArrowDownLeftIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "ArrowDownRight",
    fingertipName: "ArrowDownRightIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "ArrowUpLeft",
    fingertipName: "ArrowUpLeftIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "ArrowDownFromLine",
    fingertipName: "ArrowFromLineDownIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "ArrowUpFromLine",
    fingertipName: "ArrowFromLineUpIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "CornerDownLeft",
    fingertipName: "ArrowCornerDownLeftIcon",
    category: "Navigation",
    hasMatch: true,
  },

  // Status & Validation
  {
    lucideName: "Check",
    fingertipName: "CheckIcon",
    category: "Status",
    hasMatch: true,
  },
  {
    lucideName: "CheckCircle2",
    fingertipName: "CircleCheckIcon",
    category: "Status",
    hasMatch: true,
  },
  {
    lucideName: "CircleCheck",
    fingertipName: "CircleCheckIcon",
    category: "Status",
    hasMatch: true,
  },
  {
    lucideName: "Circle",
    fingertipName: "CircleOutlineIcon",
    category: "Status",
    hasMatch: true,
  },
  {
    lucideName: "X",
    fingertipName: "CrossLargeIcon",
    category: "Status",
    hasMatch: true,
  },
  {
    lucideName: "AlertCircle",
    fingertipName: "CircleExclamationIcon",
    category: "Status",
    hasMatch: true,
  },
  {
    lucideName: "CircleAlert",
    fingertipName: "CircleExclamationIcon",
    category: "Status",
    hasMatch: true,
  },
  {
    lucideName: "AlertTriangle",
    fingertipName: "TriangleExclamationIcon",
    category: "Status",
    hasMatch: true,
  },
  {
    lucideName: "TriangleAlert",
    fingertipName: "TriangleExclamationIcon",
    category: "Status",
    hasMatch: true,
  },
  {
    lucideName: "Info",
    fingertipName: "InfoIcon",
    category: "Status",
    hasMatch: true,
  },
  {
    lucideName: "CircleX",
    fingertipName: "CircleXIcon",
    category: "Status",
    hasMatch: true,
  },
  {
    lucideName: "CircleHelp",
    fingertipName: "CircleQuestionmarkIcon",
    category: "Status",
    hasMatch: true,
  },
  {
    lucideName: "BadgeCheck",
    fingertipName: "VerifiedCheckIcon",
    category: "Status",
    hasMatch: true,
  },
  {
    lucideName: "ShieldAlert",
    fingertipName: "ShieldBreakIcon",
    category: "Status",
    hasMatch: true,
  },

  // Actions & Controls
  {
    lucideName: "Plus",
    fingertipName: "PlusLargeIcon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "Minus",
    fingertipName: "MinusLargeIcon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "Search",
    fingertipName: "MagnifyingGlassIcon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "Filter",
    fingertipName: "Filter1Icon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "Settings",
    fingertipName: "SettingsGear1Icon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "Settings2",
    fingertipName: "SettingsSliderHorIcon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "Pencil",
    fingertipName: "PencilIcon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "Trash",
    fingertipName: "TrashCan2Icon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "Trash2",
    fingertipName: "TrashCan2Icon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "Ellipsis",
    fingertipName: "DotGrid1x3HorizontalIcon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "EllipsisVertical",
    fingertipName: "DotGrid1x3VerticalIcon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "MoreHorizontal",
    fingertipName: "DotGrid1x3HorizontalIcon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "MoreVertical",
    fingertipName: "DotGrid1x3VerticalIcon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "Copy",
    fingertipName: "CopySimpleIcon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "Clipboard",
    fingertipName: "ClipboardIcon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "ClipboardList",
    fingertipName: "SquareChecklistIcon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "GripVertical",
    fingertipName: "DotGrid2x3VerticalIcon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "PlusCircle",
    fingertipName: "CirclePlusIcon",
    category: "Actions",
    hasMatch: true,
  },
  {
    lucideName: "ArchiveX",
    fingertipName: "ArchiveIcon",
    category: "Actions",
    hasMatch: true,
  },

  // User & Communication
  {
    lucideName: "User",
    fingertipName: "PersonSimpleIcon",
    category: "User",
    hasMatch: true,
  },
  {
    lucideName: "User2",
    fingertipName: "PersonSimpleIcon",
    category: "User",
    hasMatch: true,
  },
  {
    lucideName: "CircleUser",
    fingertipName: "CirclePersonIcon",
    category: "User",
    hasMatch: true,
  },
  {
    lucideName: "Users",
    fingertipName: "PeopleIcon",
    category: "User",
    hasMatch: true,
  },
  {
    lucideName: "UserPlus",
    fingertipName: "PeopleAddIcon",
    category: "User",
    hasMatch: true,
  },
  {
    lucideName: "Bell",
    fingertipName: "BellIcon",
    category: "User",
    hasMatch: true,
  },
  {
    lucideName: "BellOff",
    fingertipName: "BellOffIcon",
    category: "User",
    hasMatch: true,
  },
  {
    lucideName: "BellRing",
    fingertipName: "BellAlarmIcon",
    category: "User",
    hasMatch: true,
  },
  {
    lucideName: "Mail",
    fingertipName: "Email2Icon",
    category: "User",
    hasMatch: true,
  },
  {
    lucideName: "MailOpen",
    fingertipName: "Email3Icon",
    category: "User",
    hasMatch: true,
  },
  {
    lucideName: "Send",
    fingertipName: "SendIcon",
    category: "User",
    hasMatch: true,
  },
  {
    lucideName: "MessageSquare",
    fingertipName: "Bubble3Icon",
    category: "User",
    hasMatch: true,
  },
  {
    lucideName: "Inbox",
    fingertipName: "InboxEmptyIcon",
    category: "User",
    hasMatch: true,
  },

  // Navigation
  {
    lucideName: "Menu",
    fingertipName: "BarsThreeIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "Home",
    fingertipName: "HomeIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "Calendar",
    fingertipName: "Calendar1Icon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "CalendarDays",
    fingertipName: "CalendarDaysIcon",
    category: "Navigation",
    hasMatch: true,
  },
  {
    lucideName: "CalendarPlus",
    fingertipName: "CalendarAdd4Icon",
    category: "Navigation",
    hasMatch: true,
  },

  // Media
  {
    lucideName: "Camera",
    fingertipName: "Camera1Icon",
    category: "Media",
    hasMatch: true,
  },
  {
    lucideName: "Play",
    fingertipName: "PlayIcon",
    category: "Media",
    hasMatch: true,
  },
  {
    lucideName: "Pause",
    fingertipName: "PauseIcon",
    category: "Media",
    hasMatch: true,
  },
  {
    lucideName: "Volume2",
    fingertipName: "VolumeFullIcon",
    category: "Media",
    hasMatch: true,
  },
  {
    lucideName: "VolumeX",
    fingertipName: "VolumeOffIcon",
    category: "Media",
    hasMatch: true,
  },
  {
    lucideName: "Image",
    fingertipName: "Images1Icon",
    category: "Media",
    hasMatch: true,
  },
  {
    lucideName: "Eye",
    fingertipName: "EyeOpenIcon",
    category: "Media",
    hasMatch: true,
  },
  {
    lucideName: "EyeOff",
    fingertipName: "EyeSlashIcon",
    category: "Media",
    hasMatch: true,
  },
  {
    lucideName: "AudioLines",
    fingertipName: "AudioBarsIcon",
    category: "Media",
    hasMatch: true,
  },

  // Theme & Feedback
  {
    lucideName: "Moon",
    fingertipName: "MoonIcon",
    category: "Theme",
    hasMatch: true,
  },
  {
    lucideName: "Sun",
    fingertipName: "SunIcon",
    category: "Theme",
    hasMatch: true,
  },
  {
    lucideName: "SunDim",
    fingertipName: "SunIcon",
    category: "Theme",
    hasMatch: true,
  },
  {
    lucideName: "Heart",
    fingertipName: "HeartIcon",
    category: "Theme",
    hasMatch: true,
  },
  {
    lucideName: "Star",
    fingertipName: "StarIcon",
    category: "Theme",
    hasMatch: true,
  },
  {
    lucideName: "Bookmark",
    fingertipName: "BookmarkIcon",
    category: "Theme",
    hasMatch: true,
  },
  {
    lucideName: "Zap",
    fingertipName: "ZapIcon",
    category: "Theme",
    hasMatch: true,
  },
  {
    lucideName: "Sparkles",
    fingertipName: "SparkleIcon",
    category: "Theme",
    hasMatch: true,
  },

  // Files & Folders
  {
    lucideName: "File",
    fingertipName: "FileBendIcon",
    category: "Files",
    hasMatch: true,
  },
  {
    lucideName: "FileText",
    fingertipName: "FileTextIcon",
    category: "Files",
    hasMatch: true,
  },
  {
    lucideName: "Folder",
    fingertipName: "Folder1Icon",
    category: "Files",
    hasMatch: true,
  },
  {
    lucideName: "FolderOpen",
    fingertipName: "FolderOpenIcon",
    category: "Files",
    hasMatch: true,
  },
  {
    lucideName: "Download",
    fingertipName: "ArrowInboxIcon",
    category: "Files",
    hasMatch: true,
    isChanged: true,
  },
  {
    lucideName: "Upload",
    fingertipName: "ArrowOutOfBoxIcon",
    category: "Files",
    hasMatch: true,
    isChanged: true,
  },
  {
    lucideName: "Package2",
    fingertipName: "PackageIcon",
    category: "Files",
    hasMatch: true,
  },

  // Links & Security
  {
    lucideName: "ExternalLink",
    fingertipName: "SquareArrowTopRightIcon",
    category: "Links",
    hasMatch: true,
  },
  {
    lucideName: "Link",
    fingertipName: "ChainLink1Icon",
    category: "Links",
    hasMatch: true,
  },
  {
    lucideName: "Link2",
    fingertipName: "ChainLink2Icon",
    category: "Links",
    hasMatch: true,
  },
  {
    lucideName: "Lock",
    fingertipName: "LockIcon",
    category: "Links",
    hasMatch: true,
  },
  {
    lucideName: "Unlock",
    fingertipName: "UnlockedIcon",
    category: "Links",
    hasMatch: true,
  },
  {
    lucideName: "Globe",
    fingertipName: "GlobusIcon",
    category: "Links",
    hasMatch: true,
  },
  {
    lucideName: "Phone",
    fingertipName: "PhoneIcon",
    category: "Links",
    hasMatch: true,
  },
  {
    lucideName: "Smartphone",
    fingertipName: "PhoneIcon",
    category: "Links",
    hasMatch: true,
  },
  {
    lucideName: "MapPin",
    fingertipName: "MapPinIcon",
    category: "Links",
    hasMatch: true,
  },
  {
    lucideName: "Map",
    fingertipName: "MapIcon",
    category: "Links",
    hasMatch: true,
  },
  {
    lucideName: "Cloud",
    fingertipName: "CloudIcon",
    category: "Links",
    hasMatch: true,
  },
  {
    lucideName: "Code",
    fingertipName: "CodeIcon",
    category: "Developer",
    hasMatch: true,
  },
  {
    lucideName: "Code2",
    fingertipName: "CodeBracketsIcon",
    category: "Developer",
    hasMatch: true,
  },

  // Loading & Refresh
  {
    lucideName: "Loader",
    fingertipName: "LoaderIcon",
    category: "Loading",
    hasMatch: true,
  },
  {
    lucideName: "Loader2",
    fingertipName: "LoaderIcon",
    category: "Loading",
    hasMatch: true,
  },
  {
    lucideName: "RefreshCw",
    fingertipName: "ArrowsRepeatCircleIcon",
    category: "Loading",
    hasMatch: true,
  },
  {
    lucideName: "RefreshCcw",
    fingertipName: "ArrowsRepeatCircleIcon",
    category: "Loading",
    hasMatch: true,
    isChanged: true,
  },
  {
    lucideName: "RotateCcw",
    fingertipName: "ArrowRotateCounterClockwiseIcon",
    category: "Loading",
    hasMatch: true,
  },

  // Commerce
  {
    lucideName: "CreditCard",
    fingertipName: "CreditCard2Icon",
    category: "Commerce",
    hasMatch: true,
  },
  {
    lucideName: "ShoppingBag",
    fingertipName: "ShoppingBag1Icon",
    category: "Commerce",
    hasMatch: true,
  },
  {
    lucideName: "Tag",
    fingertipName: "TagIcon",
    category: "Commerce",
    hasMatch: true,
  },
  {
    lucideName: "Tags",
    fingertipName: "TagIcon",
    category: "Commerce",
    hasMatch: true,
  },
  {
    lucideName: "Gift",
    fingertipName: "Gift1Icon",
    category: "Commerce",
    hasMatch: true,
  },
  {
    lucideName: "Ticket",
    fingertipName: "TicketIcon",
    category: "Commerce",
    hasMatch: true,
  },

  // Layout
  {
    lucideName: "LayoutDashboard",
    fingertipName: "LayoutDashboardIcon",
    category: "Layout",
    hasMatch: true,
  },
  {
    lucideName: "LayoutGrid",
    fingertipName: "LayoutGrid1Icon",
    category: "Layout",
    hasMatch: true,
  },
  {
    lucideName: "PanelLeft",
    fingertipName: "SidebarSimpleLeftSquareIcon",
    category: "Layout",
    hasMatch: true,
  },
  {
    lucideName: "Sidebar",
    fingertipName: "SidebarIcon",
    category: "Layout",
    hasMatch: true,
  },
  {
    lucideName: "AppWindow",
    fingertipName: "WindowAppIcon",
    category: "Layout",
    hasMatch: true,
  },
  {
    lucideName: "Frame",
    fingertipName: "FrameSimpleIcon",
    category: "Layout",
    hasMatch: true,
    isChanged: true,
  },
  {
    lucideName: "Square",
    fingertipName: "SquarePlaceholderIcon",
    category: "Layout",
    hasMatch: true,
  },
  {
    lucideName: "SquareDashed",
    fingertipName: "SquarePlaceholderDashedIcon",
    category: "Layout",
    hasMatch: true,
  },

  // Text & Formatting
  {
    lucideName: "Quote",
    fingertipName: "QuoteIcon",
    category: "Text",
    hasMatch: true,
  },
  {
    lucideName: "List",
    fingertipName: "BulletListIcon",
    category: "Text",
    hasMatch: true,
  },
  {
    lucideName: "Bold",
    fingertipName: "BoldIcon",
    category: "Text",
    hasMatch: true,
  },
  {
    lucideName: "Italic",
    fingertipName: "ItalicIcon",
    category: "Text",
    hasMatch: true,
  },
  {
    lucideName: "Underline",
    fingertipName: "UnderlineIcon",
    category: "Text",
    hasMatch: true,
  },

  // Auth
  {
    lucideName: "LogOut",
    fingertipName: "ArrowBoxLeftIcon",
    category: "Auth",
    hasMatch: true,
    isChanged: true,
  },
  {
    lucideName: "LogIn",
    fingertipName: "LoginIcon",
    category: "Auth",
    hasMatch: true,
    isChanged: true,
  },

  // Devices
  {
    lucideName: "Laptop",
    fingertipName: "MacbookIcon",
    category: "Devices",
    hasMatch: true,
  },
  {
    lucideName: "Monitor",
    fingertipName: "ImacIcon",
    category: "Devices",
    hasMatch: true,
  },
  {
    lucideName: "Tablet",
    fingertipName: "PhoneIcon",
    category: "Devices",
    hasMatch: true,
  },

  // Charts & Data
  {
    lucideName: "Activity",
    fingertipName: "Trending1Icon",
    category: "Charts",
    hasMatch: true,
  },
  {
    lucideName: "TrendingUp",
    fingertipName: "Trending4Icon",
    category: "Charts",
    hasMatch: true,
  },
  {
    lucideName: "TrendingDown",
    fingertipName: "TrendingDownSimpleIcon",
    category: "Charts",
    hasMatch: true,
    isChanged: true,
  },
  {
    lucideName: "PieChart",
    fingertipName: "PieChartIcon",
    category: "Charts",
    hasMatch: true,
  },
  {
    lucideName: "LandPlot",
    fingertipName: "LandPlotSimpleIcon",
    category: "Charts",
    hasMatch: true,
    isChanged: true,
  },

  // Developer
  {
    lucideName: "Command",
    fingertipName: "CmdIcon",
    category: "Developer",
    hasMatch: true,
  },
  {
    lucideName: "Terminal",
    fingertipName: "ConsoleIcon",
    category: "Developer",
    hasMatch: true,
  },
  {
    lucideName: "GitCommitVertical",
    fingertipName: "GitCommitVerticalIcon",
    category: "Developer",
    hasMatch: true,
    isChanged: true,
  },
  {
    lucideName: "Slash",
    fingertipName: "SlashForwardIcon",
    category: "Developer",
    hasMatch: true,
    isChanged: true,
  },

  // Misc
  {
    lucideName: "Bed",
    fingertipName: "BedIcon",
    category: "Misc",
    hasMatch: true,
  },
  {
    lucideName: "Bot",
    fingertipName: "RobotIcon",
    category: "Misc",
    hasMatch: true,
  },
  {
    lucideName: "Clock2",
    fingertipName: "ClockIcon",
    category: "Misc",
    hasMatch: true,
  },
  {
    lucideName: "CircleFadingArrowUp",
    fingertipName: "ArrowUpCircleIcon",
    category: "Misc",
    hasMatch: true,
  },
  {
    lucideName: "Dot",
    fingertipName: "DotSmallIcon",
    category: "Misc",
    hasMatch: true,
    isChanged: true,
  },
  {
    lucideName: "Footprints",
    fingertipName: "FootstepsIcon",
    category: "Misc",
    hasMatch: true,
  },
  {
    lucideName: "GalleryHorizontalEnd",
    fingertipName: "AlbumsIcon",
    category: "Misc",
    hasMatch: true,
  },
  {
    lucideName: "GalleryVerticalEnd",
    fingertipName: "AlbumsIcon",
    category: "Misc",
    hasMatch: true,
  },
  {
    lucideName: "HelpCircle",
    fingertipName: "CircleQuestionmarkIcon",
    category: "Misc",
    hasMatch: true,
  },
  {
    lucideName: "LifeBuoy",
    fingertipName: "RescueRingIcon",
    category: "Misc",
    hasMatch: true,
  },
  {
    lucideName: "Popcorn",
    fingertipName: "PopcornIcon",
    category: "Misc",
    hasMatch: true,
  },
  {
    lucideName: "Waves",
    fingertipName: "WavesSimpleIcon",
    category: "Misc",
    hasMatch: true,
    isChanged: true,
  },
  {
    lucideName: "OctagonX",
    fingertipName: "CircleXIcon",
    category: "Status",
    hasMatch: true,
  },
];

export const categories = [...new Set(mappings.map((m) => m.category))];
