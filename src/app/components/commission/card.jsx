import React from "react";
import { Icon } from "@iconify/react";

const Card = ({ titre, compte, icone }) => (
  <div className="flex flex-col ">
    <div className="flex items-center justify-center mb-2 gap-4">
      <div className="flex items-center justify-center p-3 bg-[#fff0eb] rounded-lg">
        {" "}
        <Icon icon={icone} className="w-7 h-7 text-[#ff723b]" />{" "}
      </div>{" "}
      <h4 className="text-[#262d35] text-[13px] font-semibold">{titre}</h4>
      
    </div>
    <p className="text-gray-500">{compte}</p>
  </div>
);

export default Card;
