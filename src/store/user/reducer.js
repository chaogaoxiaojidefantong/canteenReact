import * as user from './action-type';
let defaultState = {
    userName: '',  //姓名
    userEmail:'',  //邮箱
    userPwd:''//密码
}

// 首页表单数据
export const loginGo = (state = defaultState , action = {}) => {   
    let obj={...state,...action.data}
    return obj;
}
