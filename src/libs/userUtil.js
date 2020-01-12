class UserUtil{
    /**
     * 
     * @param {*} data  json
     */
    setUser(data){        
        localStorage.setItem('user',JSON.stringify(data));
    }
    /**
     * 获得localStorage里的user数据
     */
    getUser(){
       return JSON.parse(localStorage.getItem('user'));       
    }
}
export default new UserUtil();