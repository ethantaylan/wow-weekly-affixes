import moment from "moment";
import "./App.css";
import { useAxios } from "./hooks/use-axios";
import { getEUAffixes } from "./services/rio-api";
import React from "react";
import BackgroundImg from "../src/assets/bg.png";
import { Header } from "./components/header/header";
import { AffixesCard } from "./components/affixes-card/affixes-card";

export interface AffixDetails {
  id: number;
  name: string;
  description: string;
  icon: string;
  wowhead_url: string;
}

export interface Affixes {
  affix_details: AffixDetails[];
}

export default function App() {
  const [affixes, setAffixes] = React.useState<AffixDetails[]>([]);

  const date = moment().format("MMMM Do YYYY");

  const getEUAffixesFetch = useAxios<Affixes>(getEUAffixes(), false);

  React.useEffect(() => {
    getEUAffixesFetch.executeFetch();
  }, []);

  React.useEffect(() => {
    getEUAffixesFetch.response &&
      setAffixes(getEUAffixesFetch.response.affix_details);

    console.log(affixes);
  }, [getEUAffixesFetch.response]);

  return (
    <div
      style={{ backgroundImage: `url(${BackgroundImg})` }}
      className="p-10 pt-20 text-center text-white flex flex-col items-center w-screen h-screen"
    >
      <Header />
      <div className="flex gap-5">
        <AffixesCard affixes={affixes} date={date} />
        <AffixesCard affixes={affixes} date={date} />
      </div>
    </div>
  );
}
