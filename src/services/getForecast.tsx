import { api, apiKey, apiUrl } from "./api";

export const getForecast = async (cityName: string): Promise<any> => {
  const url = `${apiUrl}/forecast?q=${encodeURIComponent(
    cityName
  )}&lang=pt_br&appid=${apiKey}&units=metric&ctn=40`;

  return api(url);
};
