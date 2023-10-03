import { AxiosRequestConfig } from "axios";

export const getEUAffixes = (): AxiosRequestConfig => ({
  url: "https://raider.io/api/v1/mythic-plus/affixes?region=eu&locale=en",
  method: "GET",
});
