import React from "react";
import { motion } from "framer-motion";
const Left = () => {
  return (
    <div className="flex flex-col items-start justify-center flex-1 gap-3 py-2">
      <p className="text-[2rem] lg:text-[4rem] font-bold tracking-wide text-headingColor">
        The Best Place to Find Great Food
      </p>
      <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nam
        delectus sed, vel quaerat, libero nesciunt debitis, architecto
        repudiandae accusamus aut exercitationem nisi non doloribus! Temporibus
        officia architecto reiciendis blanditiis.
      </p>
    </div>
  );
};

export default Left;
