import React from "react";
import { AffixDetails } from "../../App";

export interface AffixesCardProps {
  affixes: AffixDetails[];
  date: string;
}

export const AffixesCard: React.FC<AffixesCardProps> = ({ affixes, date }) => {
  return (
    <div className="backdrop-blur-lg flex flex-col justify-between p-10 mt-20 w-1/2 rounded-lg">
      <div>
        <h3 className="text-2xl text-left">This Week</h3>
        <small className="text-secondary flex mb-5">({date})</small>
      </div>

      {/* TRANSFORM IT TO BE ONLY NUMERIC DATE */}

      {affixes.map((affix, i: number) => (
        <div key={i} className="flex items-center mt-2">
          <img
            src={`../src/assets/affixes/${affix.name}.jpg`}
            className="w-10 border-2 border-secondary h-10 rounded-full"
          ></img>
          <span className="ms-2 text-xl">{affix.name}</span>
        </div>
      ))}

      <div className="mt-10">
        {affixes.map((affix, i: number) => (
          <small className="text-zinc-500" key={i}>
            <p className="text-left mt-5">
              <span className="font-bold">{affix.name}: </span>
              {affix.description}
            </p>
          </small>
        ))}
      </div>
    </div>
  );
};
