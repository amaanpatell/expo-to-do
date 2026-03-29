export type TaskStatus = "Done" | "In Progress" | "To-do";

export type TaskIcon = {
  name: string;
  backgroundColor: string;
};

export type Task = {
  id: string;
  category: string;
  title: string;
  time: string;
  status: TaskStatus;
  icon: TaskIcon;
};

export const TASKS: Task[] = [
  {
    id: "1",
    category: "Grocery shopping app design",
    title: "Market Research",
    time: "10:00 AM",
    status: "Done",
    icon: { name: "grid", backgroundColor: "#FF6B8A" },
  },
  {
    id: "2",
    category: "Grocery shopping app design",
    title: "Competitive Analysis",
    time: "12:00 PM",
    status: "In Progress",
    icon: { name: "grid", backgroundColor: "#FF6B8A" },
  },
  {
    id: "3",
    category: "Uber Eats redesign challenge",
    title: "Create Low-fidelity Wireframe",
    time: "07:00 PM",
    status: "To-do",
    icon: { name: "arrow-down-circle", backgroundColor: "#4ADE80" },
  },
  {
    id: "4",
    category: "About design sprint",
    title: "How to pitch a Design Sprint",
    time: "09:00 PM",
    status: "To-do",
    icon: { name: "bookmark", backgroundColor: "#FBBF24" },
  },
  {
    id: "5",
    category: "Grocery shopping app design",
    title: "Set up user journey map",
    time: "09:30 AM",
    status: "In Progress",
    icon: { name: "map", backgroundColor: "#60A5FA" },
  },
  {
    id: "6",
    category: "Grocery shopping app design",
    title: "Define UI components",
    time: "11:00 AM",
    status: "To-do",
    icon: { name: "layers", backgroundColor: "#34D399" },
  },
  {
    id: "7",
    category: "Uber Eats redesign challenge",
    title: "Validate feature set",
    time: "01:00 PM",
    status: "Done",
    icon: { name: "check-circle", backgroundColor: "#A78BFA" },
  },
  {
    id: "8",
    category: "About design sprint",
    title: "Write sprint brief",
    time: "02:30 PM",
    status: "To-do",
    icon: { name: "file-text", backgroundColor: "#F59E0B" },
  },
  {
    id: "9",
    category: "Grocery shopping app design",
    title: "Prototype first screen",
    time: "03:30 PM",
    status: "In Progress",
    icon: { name: "smartphone", backgroundColor: "#F97316" },
  },
  {
    id: "10",
    category: "Uber Eats redesign challenge",
    title: "Usability testing setup",
    time: "04:45 PM",
    status: "To-do",
    icon: { name: "user-check", backgroundColor: "#06B6D4" },
  },
  {
    id: "11",
    category: "About design sprint",
    title: "Create experiement brief",
    time: "05:30 PM",
    status: "Done",
    icon: { name: "bolt", backgroundColor: "#E879F9" },
  },
  {
    id: "12",
    category: "Grocery shopping app design",
    title: "Review color palette",
    time: "06:00 PM",
    status: "In Progress",
    icon: { name: "droplet", backgroundColor: "#0EA5E9" },
  },
  {
    id: "13",
    category: "Uber Eats redesign challenge",
    title: "Adjust information hierarchy",
    time: "07:15 PM",
    status: "To-do",
    icon: { name: "layers", backgroundColor: "#9333EA" },
  },
  {
    id: "14",
    category: "About design sprint",
    title: "Draft functional specs",
    time: "08:00 PM",
    status: "In Progress",
    icon: { name: "clipboard", backgroundColor: "#14B8A6" },
  },
  {
    id: "15",
    category: "Grocery shopping app design",
    title: "Run accessibility audit",
    time: "08:45 PM",
    status: "To-do",
    icon: { name: "accessibility", backgroundColor: "#22C55E" },
  },
  {
    id: "16",
    category: "Uber Eats redesign challenge",
    title: "Implement basic layout",
    time: "09:30 PM",
    status: "Done",
    icon: { name: "layout", backgroundColor: "#F43F5E" },
  },
  {
    id: "17",
    category: "About design sprint",
    title: "Sync with stakeholder",
    time: "10:15 PM",
    status: "To-do",
    icon: { name: "users", backgroundColor: "#0EA5E9" },
  },
  {
    id: "18",
    category: "Grocery shopping app design",
    title: "Finalize iconography",
    time: "10:45 PM",
    status: "Done",
    icon: { name: "aperture", backgroundColor: "#FBBF24" },
  },
  {
    id: "19",
    category: "Uber Eats redesign challenge",
    title: "Create high-fidelity mockups",
    time: "11:30 PM",
    status: "In Progress",
    icon: { name: "palette", backgroundColor: "#FDBA74" },
  },
  {
    id: "20",
    category: "About design sprint",
    title: "Feedback debrief session",
    time: "12:15 AM",
    status: "To-do",
    icon: { name: "message-circle", backgroundColor: "#22D3EE" },
  },
  {
    id: "21",
    category: "Grocery shopping app design",
    title: "Record design rationale",
    time: "01:00 AM",
    status: "Done",
    icon: { name: "book", backgroundColor: "#8B5CF6" },
  },
  {
    id: "22",
    category: "Uber Eats redesign challenge",
    title: "Update navigation flow",
    time: "01:45 AM",
    status: "In Progress",
    icon: { name: "arrow-right", backgroundColor: "#F97316" },
  },
  {
    id: "23",
    category: "About design sprint",
    title: "Review competitor UX",
    time: "02:30 AM",
    status: "To-do",
    icon: { name: "search", backgroundColor: "#10B981" },
  },
  {
    id: "24",
    category: "Grocery shopping app design",
    title: "Prepare launch checklist",
    time: "03:15 AM",
    status: "To-do",
    icon: { name: "clipboard-check", backgroundColor: "#14B8A6" },
  },
  {
    id: "25",
    category: "Uber Eats redesign challenge",
    title: "Create post-launch report",
    time: "04:00 AM",
    status: "In Progress",
    icon: { name: "bar-chart-2", backgroundColor: "#0EA5E9" },
  },
];

export const FILTER_OPTIONS = [
  "All",
  "To-do",
  "In Progress",
  "Done",
] as const;

export type FilterOptions = (typeof FILTER_OPTIONS)[number];
