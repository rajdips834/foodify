// import React from 'react'

import { MdOutlineRestaurantMenu, MdShoppingBasket } from "react-icons/md";

import { Link } from "react-router-dom";
import { Logo } from "../Assets";
import { motion } from "framer-motion";
import { useStateValue } from "../../context/StateProvider";

const MobileNav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) => {
  const [{ showContactForm, showCart, cartItems }, dispatch] = useStateValue();
  const handleToggleCart = () => {
    dispatch({
      type: "TOGGLE_CART",
      showCart: !showCart,
    });
  };
  const handleToggleContact = () => {
    dispatch({
      type: "TOGGLE_CONTACT_FORM",
      showContactForm: !showContactForm,
    });
  };
  return (
    <div className="z-50 flex flex-col items-start justify-start w-screen h-screen gap-16 overflow-hidden overflow-y-hidden bg-cardOverlay backdrop-blur-sm ">
      <motion.div className="flex items-center justify-between w-screen h-24 px-10">
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="relative flex items-center justify-center text-textColor"
          onClick={handleToggleCart}
        >
          <MdShoppingBasket className="text-4xl cursor-pointer" />
          {cartItems && (
            <div className="absolute flex items-center justify-center w-6 h-6 rounded-full -top-2 -right-2 bg-cartNumBg">
              <p className="text-sm font-semibold text-white">
                {cartItems.length}
              </p>
            </div>
          )}
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="relative flex items-center justify-center text-textColor"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MdOutlineRestaurantMenu className="text-4xl text-headingColor" />
        </motion.div>
      </motion.div>
      <div
        className={`flex items-center justify-center w-full  h-72 gap-10 flex-col`}
      >
        <Link
          onClick={() => setIsOpen(!isOpen)}
          to={"/menu"}
          className="px-10 text-base transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor"
        >
          Menu
        </Link>
      </div>

      <Link
        to={"/"}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-full"
      >
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src={Logo} alt="Logo" className="object-cover w-16" />
          <p className="text-3xl font-bold text-headingColor">Foodify</p>
        </motion.div>
      </Link>
    </div>
  );
};

export default MobileNav;
