import config from "./config";
import HttpRequest from "./axios";
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
export const axios=new HttpRequest(baseUrl);