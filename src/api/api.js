// 专门存放发送异步请求后接受到的数据
import { axios } from "./api.request";
class Api{
    login(data){
        return axios.request({
            url: "/adminServiceZuul/User/login",
            method: "post",
            data: data
          });
    }
    getCanteen(data){
        return axios.request({
            url: "/adminServiceZuul/Canteen/selectCanteen",
            method: "post",
            data: data
          });
    }
}
export default new Api();
