import { Link } from "react-router-dom";
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
      <Link to="/">
        <House />
      </Link>
      <Link to="/dashboard">
        <Minus />
      </Link>
      <Link to="/dashboard">
        <CircleHelp />
      </Link>
      <Link to="/dashboard">
        <CircleAlert />
      </Link>
      <Link to="/dashboard">
        <Share2 />
      </Link>
      <Link to="/dashboard">
        <AudioLines />
      </Link>
      <Link to="/dashboard">
        <ChartNoAxesColumn />
      </Link>
      <Link to="/dashboard">
        <Settings />
      </Link>
    </aside>
  );
}
