import React from "react";
import Logo from "../../../src/assets/logo.png";

export const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl text-white font-bold">
        <img src={Logo} width={216} alt="" />
        {/* M+ WEEKLY AFFIXES <span className="font-normal">(EU)</span> */}
      </h1>
      {/* <h2 className="text-xl w-4/6 mt-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, esse
        repellat veniam ab reprehenderit.
      </h2> */}
    </div>
  );
};
