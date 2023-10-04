import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl text-white font-bold">MYTHIC PLUS</h1>
      <h2 style={{ letterSpacing: 6 }} className="text-xl text-secondary">
        WEEKLY AFFIXES
      </h2>

      {/* <h2 className="text-md mt-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, esse
        repellat veniam ab reprehenderit.
      </h2> */}
    </div>
  );
};
