import {
  House,
  CircleHelp,
  CircleAlert,
  Minus,
  Share2,
  Settings,
  AudioLines,
  ChartNoAxesColumn,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="flex flex-col p-4 border-r-1 w-[60px] gap-5 h-screen items-center">
      <House />
      <Minus />
      <CircleHelp />
      <CircleAlert />
      <Share2 />
      <AudioLines />
      <ChartNoAxesColumn />
      <Settings />
    </aside>
  );
}
