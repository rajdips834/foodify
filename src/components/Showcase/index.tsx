import React from "react";

import { HeroBg } from "../Assets";
import StaticsImages from "./Statics";
import { data } from "../../utils/showcaseStatic";
const Showcase = () => {
  return (
    <>
      <div className="grid w-[80%] grid-cols-1 gap-2  ">
        <div className="flex flex-col items-start justify-center flex-1 gap-3 py-2">
          <p className="text-[2rem] lg:text-[3rem] font-bold text-center w-full tracking-wide text-headingColor">
            The Best Place to Find Great Food
          </p>
          <p className="text-base text-center text-textColor md:text-left md:w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nam
            delectus sed, vel quaerat, libero nesciunt debitis, architecto
          </p>
        </div>
      </div>
      <div className="relative flex items-center flex-1 py-2">
        <img
          src={HeroBg}
          alt=""
          className="ml-auto lg:h-[550px] h-[420px] w-full lg:w-auto"
        />
        <StaticsImages items={data} />
      </div>
    </>
  );
};

export default Showcase;
