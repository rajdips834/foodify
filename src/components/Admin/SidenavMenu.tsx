import { AiFillDashboard } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import {
  MdAddModerator,
  MdOutlineFavoriteBorder,
  MdRestaurantMenu,
} from "react-icons/md";
import { motion } from "framer-motion";
import { FaCogs } from "react-icons/fa";
import AddFood from "./AddFood";
import Dashboard from "./Dashboard";
import Users from "./Users";
import Menu from "./Menu";
import { useStateValue } from "../../context/StateProvider";

const SidenavMenu = ({
  activePage,
  setActivePage,
  setPageContent,
}: {
  activePage: string;
  setActivePage: any;
  setPageContent: any;
}) => (
  <motion.nav
    initial={{ opacity: 0, x: 200 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 200 }}
    className="w-full space-y-2 "
  >
    <NavItem
      activePage={activePage}
      svgIcon={<MdAddModerator />}
      title="Add Food"
      setActivePage={setActivePage}
      setPageContent={setPageContent}
      pageContent={<AddFood />}
    />
    <NavItem
      activePage={activePage}
      svgIcon={<MdRestaurantMenu />}
      title="Menu"
      setActivePage={setActivePage}
      setPageContent={setPageContent}
      pageContent={<Menu />}
    />
    <NavItem
      activePage={activePage}
      svgIcon={<MdOutlineFavoriteBorder />}
      title="Orders"
      setActivePage={setActivePage}
      setPageContent={setPageContent}
      pageContent={
        <div className="flex justify-center w-full tems-center">Orders</div>
      }
    />
    <NavItem
      activePage={activePage}
      svgIcon={<FiUsers />}
      title="Users"
      setActivePage={setActivePage}
      setPageContent={setPageContent}
      pageContent={<Users />}
    />
  </motion.nav>
);

const NavItem = ({
  activePage,
  svgIcon,
  title,
  setActivePage,
  setPageContent,
  pageContent,
}: {
  activePage: string;
  setActivePage: any;
  svgIcon: any;
  title: string;
  setPageContent: any;
  pageContent: JSX.Element;
}) => {
  const handleClick = () => {
    setActivePage(title);
    setPageContent(pageContent);
  };
  const [{ users, foodItems }, dispatch] = useStateValue();
  return (
    <motion.div
      whileTap={{ scale: 1.1 }}
      onClick={handleClick}
      className={`flex items-center no-underline text-purple-50 hover:text-purple-100 p-3 rounded-md cursor-pointer hover:bg-purple-700 ${
        activePage === title ? "bg-purple-700" : ""
      }`}
    >
      <p className="text-xl font-bold">{svgIcon}</p>
      <div className="flex items-center justify-center gap-10 pl-3 font-bold">
        {title}
        {(title === "Menu" || title === "Users") && (
          <div className="flex items-center justify-center w-5 h-5 rounded-full cursor-pointer bg-cartNumBg">
            <p className="text-sm font-semibold text-white">
              {title === "Menu" ? foodItems?.length : users?.length}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};
export default SidenavMenu;
