import React from "react";
import { useStateValue } from "../../context/StateProvider";
import { motion } from "framer-motion";
import { addToCart, deleteFood } from "../../utils/functions";
import { MdAddShoppingCart, MdDeleteForever } from "react-icons/md";
import { FoodItem } from "../../../types";

const Action = ({ food, admin }: { food: FoodItem; admin?: boolean }) => {
  const [{ cartItems, foodItems, user }, dispatch] = useStateValue();
  return (
    <div className="flex flex-col gap-2">
      {admin ? (
        <>
          <motion.div
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 1.2 }}
            className="flex items-center justify-center w-8 h-8 bg-purple-600 rounded-full cursor-pointer md:w-10 md:h-10"
            onClick={() => deleteFood(food, foodItems, dispatch)}
            title="Delete"
          >
            <MdDeleteForever className="text-white md:text-xl" />
          </motion.div>
        </>
      ) : (
        <motion.div
          whileTap={{ scale: 1.1 }}
          whileHover={{ scale: 1.2 }}
          className="flex items-center justify-center w-8 h-8 bg-purple-600 rounded-full cursor-pointer md:w-10 md:h-10"
          onClick={() =>
            addToCart(cartItems, foodItems, user, food.id, dispatch)
          }
          title="Add to cart"
        >
          <MdAddShoppingCart className="text-white md:text-xl" />
        </motion.div>
      )}
    </div>
  );
};

export default Action;
