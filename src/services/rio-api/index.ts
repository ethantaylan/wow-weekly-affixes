import { AxiosRequestConfig } from "axios";

export const getAffixes = (region: string, langage: string): AxiosRequestConfig => ({
  url: `https://raider.io/api/v1/mythic-plus/affixes?region=${region}&locale=${langage}`,
  method: "GET",
});

export const getDates = (): AxiosRequestConfig => ({
  url: "https://raider.io/api/v1/periods",
  method: "GET",
});
