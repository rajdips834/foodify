import React from "react";
import { motion } from "framer-motion";
import { foodItemsStatic } from "../../../types";

const StaticsImages: React.FC<foodItemsStatic> = ({ items }) => {
  return (
    <div className="absolute left-0 flex flex-wrap items-center justify-center w-full h-full gap-4 top-6 lg:px-30 lg:py-4 ">
      {items.map((item, index) => (
        <div
          key={index}
          className="cursor-pointer min-h-[140px] lg:min-h-[210px] min-w-[150px] lg:min-w-[200px] drop-shadow-lg p-2 bg-cardOverlay backdrop-blur-md rounded-xl flex flex-col items-center justify-center"
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            src={item.imgSrc}
            alt="icecream"
            className="w-24 -mt-10 lg:w-40 lg:-mt-20"
          />
          <p className="text-base font-semibold lg:text-lg text-textColor">
            {item.title}
          </p>
          <p className="text-[10px] lg:text-lg text-lightGray font-semibold my-2 lg:my-3">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StaticsImages;
