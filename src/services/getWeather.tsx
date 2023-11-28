import { api, apiKey, apiUrl } from "./api";

export const getWeather = async (cityName: string): Promise<any> => {
  const url = `${apiUrl}/weather?q=${encodeURIComponent(
    cityName
  )}&lang=pt_br&appid=${apiKey}&units=metric`;

  return api(url);
};
