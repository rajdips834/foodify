import React from "react";

import { HeroBg } from "../Assets";
import StaticsImages from "./Statics";
import { data } from "../../utils/showcaseStatic";
const Showcase = () => {
  return (
    <>
      <div className="grid w-[80%] grid-cols-1 gap-2 " id="home">
        <div className="flex flex-col items-start justify-center flex-1 gap-3 py-2">
          <p className="text-[2rem] lg:text-[4rem] font-bold tracking-wide text-headingColor">
            The Best Place to Find Great Food
          </p>
          <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nam
            delectus sed, vel quaerat, libero nesciunt debitis, architecto
            repudiandae accusamus aut exercitationem nisi non doloribus!
            Temporibus officia architecto reiciendis blanditiis.
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
