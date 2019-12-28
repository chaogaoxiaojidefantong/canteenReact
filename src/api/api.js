import Server from './server';

class API extends Server{
     getCanteen(params={}){
        return this.axios('post','/adminServiceZuul/Canteen/selectCanteen',params);
    }
    /**
     * 登录
     * @param {*} params 
     */
    login(params={}){
        return this.axios('post','/adminServiceZuul/User/login',params);
    }
    
}
export default new API();