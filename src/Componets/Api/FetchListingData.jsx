import { BASE_CONFIG } from "../Config";
import { callingApi } from "./ApiWrapper";

export const makeSearchString = (queryParams) => {
  const searchParams = new URLSearchParams();
  for (const key in queryParams) {
    if (queryParams[key]) {
      searchParams.append(key, queryParams[key]);
    }
  }
  return searchParams.toString();
};

export const fetchWeatherData = async (body = {}, query = {}) => {
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?appid=${BASE_CONFIG?.WEATHER_API_KEY}`;
    if (query) {
      const searchString = makeSearchString(query);
      url = searchString ? `${url}&${searchString}` : url;
    }
    console.log(url,"url");
    const data = await callingApi({
      url: url,
      method: "GET",
      body: { ...body },
    });
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  } finally {
    console.log("fetched");
  }
};
