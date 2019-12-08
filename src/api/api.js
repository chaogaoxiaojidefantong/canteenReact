import Server from './server';

class API extends Server{
     getCanteen(params={}){
        return this.axios('post','/adminServiceZuul/Canteen/selectCanteen',params);
    }
}
export default new API();