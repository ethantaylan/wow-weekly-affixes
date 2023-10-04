import "./App.css";
import { useAxios } from "./hooks/use-axios";
import { getAffixes, getDates } from "./services/rio-api";
import React from "react";
import BackgroundImg from "../src/assets/bg.png";
import { Header } from "./components/header/header";
import { AffixesCard } from "./components/affixes-card/affixes-card";
import dayjs from "dayjs";
import { Footer } from "./components/footer/footer";

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

export interface DatePeriods {
  start: string;
  end: string;
}

export default function App() {
  // Affixes
  const [euAffixes, setEUAffixes] = React.useState<AffixDetails[]>([]);
  const [naAffixes, setNAAffixes] = React.useState<AffixDetails[]>([]);
  const [langage, setLangage] = React.useState<string>("en");

  // Dates
  const [euDate, setEuDate] = React.useState<DatePeriods>({
    start: "",
    end: "",
  });

  const [nextWeek, setNextWeek] = React.useState<DatePeriods>({
    start: "",
    end: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getDatesFetch = useAxios<any>(getDates(), false);
  const getEUAffixesFetch = useAxios<Affixes>(
    getAffixes("eu", langage.substring(0, 2).toLowerCase()),
    false
  );
  const getNAAffixesFetch = useAxios<Affixes>(getAffixes("us", langage.substring(0, 2).toLowerCase()), false);

  React.useEffect(() => {
    getEUAffixesFetch.executeFetch();
    getNAAffixesFetch.executeFetch();
    getDatesFetch.executeFetch();
  }, [langage]);

  React.useEffect(() => {
    getEUAffixesFetch.response &&
      setEUAffixes(getEUAffixesFetch.response.affix_details);

    getNAAffixesFetch.response &&
      setNAAffixes(getNAAffixesFetch.response.affix_details);

    setEuDate(getDatesFetch.response?.periods[1]?.current);
    setNextWeek(getDatesFetch.response?.periods[1]?.next);
  }, [getEUAffixesFetch.response, getNAAffixesFetch.response]);

  const formattedEuDate =
    dayjs(euDate?.start).format("DD-MM-YYYY") +
    " / " +
    dayjs(euDate?.end).format("DD-MM-YYYY");

  const formattedNextWeekDate =
    dayjs(nextWeek?.start).format("DD-MM-YYYY") +
    "  /  " +
    dayjs(nextWeek?.end).format("DD-MM-YYYY");

  return (
    <div
      style={{ backgroundImage: `url(${BackgroundImg})` }}
      className="p-10 text-center text-white flex flex-col w-screen h-auto bg-cover md:h-screen"
    >
      <Header />
      <div className="flex flex-col md:flex-row relative items-center w-full justify-between">
        <select
  
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            setLangage(event.target.value)
          }
          className="absolute bg-opacity-25 backdrop-blur-md shadow-md z-10 right-0 top-0 font-normal select select-sm w-44"
        >
          <option disabled selected>
            English
          </option>
          <option>English</option>
          <option>French</option>
          <option>Russian</option>
          <option>Korean</option>
          <option>Chineese</option>
        </select>
        <AffixesCard isThisWeek affixes={euAffixes} date={formattedEuDate} />
        <AffixesCard affixes={naAffixes} date={formattedNextWeekDate} />
      </div>
      <Footer />
    </div>
  );
}
