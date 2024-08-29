import React from "react";
import { HeroBg } from "../Assets";
import StaticsImages from "./Statics";
import { data } from "../../utils/showcaseStatic";
const Right = () => {
  return (
    <div className="relative flex items-center flex-1 py-2">
      <img
        src={HeroBg}
        alt=""
        className="ml-auto lg:h-[550px] h-[420px] w-full lg:w-auto"
      />
      <StaticsImages items={data} />
    </div>
  );
};

export default Right;
