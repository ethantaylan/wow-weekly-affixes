import React from "react";
import { AffixDetails } from "../../App";

export interface AffixesCardProps {
  affixes: AffixDetails[];
  date: string;
  isThisWeek?: boolean;
}

export const AffixesCard: React.FC<AffixesCardProps> = ({
  affixes,
  date,
  isThisWeek,
}) => {
  return (
    <div className="backdrop-blur-lg shadow-md border border-opacity-50 border-indigo-900 flex flex-col items-center justify-between p-10 mt-20 md:w-5/12 rounded-lg">
      <div>
        <h3 className="text-2xl">{isThisWeek ? "This Week" : "Next Week"}</h3>
        <small className="text-secondary flex mb-5">{date}</small>
      </div>

      <div className="flex w-full justify-around gap-2">
        {affixes.map((affix, i: number) => (
          <div key={i} className="flex flex-col items-center mt-2">
            <img
              src={`../../../src/assets/${affix.name}.jpg`}
              className="w-12 border-2 border-secondary rounded-full"
            ></img>
            <span className="ms-2 text-xl">{affix.name}</span>
          </div>
        ))}
      </div>

      <div className="mt-10">
        {affixes.map((affix, i: number) => (
          <small className="text-zinc-500" key={i}>
            <div className="text-left mt-5">
              <span className="font-bold">{affix.name}: </span>
              {affix.description}
            </div>
          </small>
        ))}
      </div>
    </div>
  );
};
