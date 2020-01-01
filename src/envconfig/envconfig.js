/**
 * 全局配置文件
 */
let baseURL; 
let imgUrl = '//39.105.190.207:7779/';
if(process.env.NODE_ENV === 'development'){
  //baseURL = '//chaogaoxiaojidefantong.top:8181/api/';
  baseURL = '//localhost:8181/api/';
}else{
  baseURL = '//chaogaoxiaojidefantong.top:8181/api/';
}


export default {imgUrl, baseURL}