import axios from "axios";
import qs from "qs";

class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      
    };
    return config;
  }

  interceptor(axiosInstance) {
    axiosInstance.interceptors.request.use(
      config => {
        config.data = qs.stringify(config.data); //转对象为url拼接的类型
        return config;
      },
      error => {
        // 对请求错误做些什么
        return Promise.reject(error);
      }
    );
    axiosInstance.interceptors.response.use(res => {
      const { data, status } = res;
      return { data, status };
    });
  }
  request(option) {
    let axiosInstance = axios.create();
    let config = Object.assign(this.getInsideConfig(), option);
    this.interceptor(axiosInstance);
    return axiosInstance(config);
  }
}
export default HttpRequest;
