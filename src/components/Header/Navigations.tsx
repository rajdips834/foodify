// import React from 'react'
import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { useStateValue } from "../../context/StateProvider";

const Navigations = ({ direction }: { direction?: string }) => {
  const [{ showContactForm, cartItems }, dispatch] = useStateValue();
  const handleToggleCart = () => {
    dispatch({
      type: "TOGGLE_CART",
      showCart: true,
    });
  };
  const handleToggleContact = () => {
    dispatch({
      type: "TOGGLE_CONTACT_FORM",
      showContactForm: !showContactForm,
    });
  };
  return (
    <div className="flex items-center gap-8">
      <motion.ul
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className={`flex items-center gap-8 ${direction && direction}`}
      >
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="text-base transition-all duration-100 ease-in-out cursor-pointer md:text-sm lg:text-md text-textColor hover:text-headingColor"
        >
          <Link to={"/"}>Home</Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="text-base transition-all duration-100 ease-in-out cursor-pointer md:text-sm lg:text-md text-textColor hover:text-headingColor"
        >
          <Link to={"/menu"}>Menu</Link>
        </motion.li>
      </motion.ul>

      <motion.div
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className="relative flex items-center justify-center text-textColor"
        onClick={handleToggleCart}
      >
        <MdShoppingBasket className="text-2xl cursor-pointer" />
        {cartItems && (
          <div className="absolute flex items-center justify-center w-5 h-5 rounded-full cursor-pointer -top-2 -right-2 bg-cartNumBg">
            <p className="text-sm font-semibold text-white">
              {cartItems.length}
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Navigations;
