import useBreakpoint from "@/lib/useBreakpoint";
import { cn } from "@/lib/utils";
import {
  FaCompass,
  FaPlus,
  FaRegCompass,
  FaRegUser,
  FaUser,
} from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { IoHome, IoHomeOutline } from "react-icons/io5";
import { RiCalendarScheduleFill, RiCalendarScheduleLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const navItem = [
  {
    title: "Home",
    icon: {
      active: <IoHome />,
      inactive: <IoHomeOutline />,
    },
    url: "/",
  },
  // {
  //   title: "Schedule",
  //   icon: {
  //     active: <RiCalendarScheduleFill />,
  //     inactive: <RiCalendarScheduleLine />,
  //   },
  //   url: "/schedule",
  // },
  {
    title: "Discover",
    icon: {
      active: <FaCompass />,
      inactive: <FaRegCompass />,
    },
    url: "/discover",
  },
  // {
  //   title: "Profile",
  //   icon: {
  //     active: <FaUser />,
  //     inactive: <FaRegUser />,
  //   },
  //   url: "/profile",
  // },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const { md } = useBreakpoint();

  return (
    md && (
      <nav className="fixed bottom-0 left-0 right-0 bg-background  ">
        <ul className="flex justify-around items-center">
          <NavItems item={navItem[0]} pathname={pathname} curve="right" />
          <div className="w-[140px]" />
          <div
            className="absolute -top-8 left-1/2 -translate-x-1/2 size-[70px] bg-gradient-navbar p-[2px] rounded-full 
  "
          >
            <div className="p-[8px] w-full h-full bg-gradient-to-b from-transparent via-transparent to-background rounded-full">
              <button className="w-full h-full bg-primary grid place-items-center rounded-full">
                <div className="absolute bg-gradient-to-b from-transparent via-transparent rounded-full shadow-2xl shadow-primary to-primary/40 z-10 w-full h-full" />
                <GoPlus className="size-7" />
              </button>
            </div>
          </div>
          <div className="absolute z-[-1] bottom-0 h-[80%] left-1/2 -translate-x-1/2 w-1/2 bg-background" />
          <NavItems item={navItem[1]} pathname={pathname} curve="left" />
        </ul>
      </nav>
    )
  );
}

function NavItems({
  item,
  pathname,
  curve,
}: {
  item: {
    title: string;
    icon: { active: React.ReactNode; inactive: React.ReactNode };
    url: string;
  };
  pathname: string;
  curve?: string;
}) {
  const checkMatch =
    (item?.url === "/" && pathname === "/") ||
    item?.url?.split("/")[1] === pathname?.split("/")[1];

  return (
    <li
      className={cn(
        "w-full py-2 pt-3 h-full  border-t-2 ",
        curve === "left" ? "rounded-ss-3xl runded" : "rounded-se-3xl"
      )}
    >
      <Link
        to={item.url}
        className={cn(
          "flex flex-col   text-xl gap-2 items-center leading-none transition-all duration-200",
          checkMatch ? "text-foreground" : "text-muted-foreground"
        )}
      >
        {item?.icon[checkMatch ? "active" : "inactive"]}
        <span className="text-[9px] font-medium">{item?.title}</span>
      </Link>
    </li>
  );
}