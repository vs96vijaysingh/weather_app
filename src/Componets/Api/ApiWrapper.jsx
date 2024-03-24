import axios from "axios";
import { BASE_CONFIG } from "../Config";
const corsProxyUrl = "https://cors-anywhere.herokuapp.com/";

export const callingApi = async ({ url, method, body }) => {
  try {
    let fullUrl = BASE_CONFIG.BASE_URL ? BASE_CONFIG.BASE_URL + url : url;
    const apiUrl = corsProxyUrl + fullUrl;
    return await axios({
      method,
      url: apiUrl,
      data: body,
    }).then((response) => response);
  } catch (error) {
    throw error;
  }
};
