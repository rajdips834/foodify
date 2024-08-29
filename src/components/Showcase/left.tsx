import React from "react";
import { motion } from "framer-motion";
const Left = () => {
  return (
    <div className="flex flex-col items-start justify-center flex-1 gap-3 py-2">
      <p className="text-[2rem] lg:text-[4rem] font-bold tracking-wide text-headingColor">
        The Fastest Food Delivery in
        <span className="text-purple-600 text-[2.5rem] lg:text-[4.6rem]">
          {" "}
          Accra
        </span>
      </p>
      <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nam
        delectus sed, vel quaerat, libero nesciunt debitis, architecto
        repudiandae accusamus aut exercitationem nisi non doloribus! Temporibus
        officia architecto reiciendis blanditiis.
      </p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="w-full px-4 py-2 transition-all duration-100 ease-in-out rounded-lg bg-gradient-to-br from-purple-400 to-purple-500 md:w-auto hover:shadow-lg"
      >
        Order Now
      </motion.button>
    </div>
  );
};

export default Left;
