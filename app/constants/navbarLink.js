import { GrContact, GrLanguage } from "react-icons/gr";
import { MdOutlineContactSupport, MdOutlineSearch } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdContactSupport } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const navlink_1 = [
  {
    icon: <GrLanguage />,
    title: "EN",
  },
  {
    icon: <MdOutlineSearch />,
    title: "Search",
  },
  {
    icon: <IoMdNotificationsOutline />,
    title: "Notifications",
  },
  {
    icon: <MdOutlineContactSupport />,
    title: "Support",
  },
  {
    icon: <GrContact />,
    title: "Contact Us",
  },
];

const navLink_2 = [
  {
    title: "Prices",
  },
  {
    title: "Book",
    icon: <IoIosArrowDown />,
  },
  {
    title: "Schedules",
  },
  {
    title: "Tracking",
  },
  {
    title: "Manage",
    icon: <IoIosArrowDown />,
  },
  {
    title: "Services",
    icon: <IoIosArrowDown />,
  },
  {
    title: "Company",
    icon: <IoIosArrowDown />,
  },
];

// {

// <IoIosArrowDown />
// }

export { navlink_1, navLink_2 };
