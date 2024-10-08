import { Avatar, Logo } from "../Assets";
import { Link } from "react-router-dom";

import DropDown from "./DropDown";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import LoginAction from "./LoginAction";
import MobileNav from "./mobile-nav";
import Navigations from "./Navigations";
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { useState } from "react";
import { useStateValue } from "../../context/StateProvider";
const Header = () => {
  //
  // const firebaseAuth = getAuth(app);
  const [{ user }, dispatch] = useStateValue();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);

  return (
    <header className="fixed z-50 w-screen bg-purple-700 border border-gray-200 shadow-lg bg-opacity-30 backdrop-blur-lg backdrop-saturate-150 border-opacity-30 md:p-3 md:px-4 lg:p-3 lg:px-16">
      {" "}
      {/* Tablet and Desktop */}
      <div className="justify-between hidden w-full md:flex item-center">
        <Link to={"/"}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img src={Logo} alt="Logo" className="object-cover md:w-6 lg:w-8" />
            <p className="font-bold text-headingColor md:text-lg lg:text-xl">
              Foodify
            </p>
          </motion.div>
        </Link>

        {/* navigation */}
        <Navigations />

        {/* User */}

        {user ? (
          <div className={`group flex items-center gap-3 px-3 py-1 rounded-lg`}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center "
            >
              <img
                src={user.photoURL || Avatar}
                className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl rounded-full cursor-pointer object-contain"
                alt="profile"
              />
              <p className="flex items-center justify-center gap-2 cursor-pointer text-headingColor">
                <RiArrowDropDownLine />
              </p>
            </motion.div>
            <DropDown user={user} />
          </div>
        ) : (
          <LoginAction text={"Login"} />
        )}
      </div>
      {/* Mobile */}
      <motion.div
        className="flex items-center justify-between w-full p-0 md:hidden"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
      >
        {isOpenMobileNav ? (
          <MobileNav isOpen={isOpenMobileNav} setIsOpen={setIsOpenMobileNav} />
        ) : (
          <div className="flex items-center justify-between w-full p-5">
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center "
              onClick={() => setIsOpenMobileNav(!isOpenMobileNav)}
            >
              <HiOutlineMenuAlt2 className="text-4xl text-headingColor" />
            </motion.div>
            <Link to={"/"}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <img src={Logo} alt="Logo" className="object-cover w-8" />
                <p className="text-xl font-bold text-headingColor">Foodify</p>
              </motion.div>
            </Link>
            {user ? (
              <div
                className={`flex items-center gap-3 px-3 py-1 rounded-lg relative`}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center justify-center group"
                >
                  <img
                    src={user?.photoURL ? user.photoURL : Avatar}
                    className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl rounded-full cursor-pointer"
                    alt="user-profile"
                    onClick={() => setIsOpen(!isOpen)}
                  />
                  <p className="flex items-center justify-center gap-2 cursor-pointer text-headingColor">
                    <RiArrowDropDownLine />
                  </p>
                  {isOpen && <DropDown user={user} />}
                </motion.div>
              </div>
            ) : (
              <LoginAction mobile />
            )}
          </div>
        )}
      </motion.div>
    </header>
  );
};

export default Header;
