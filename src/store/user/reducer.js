import * as user from './action-type';

let defaultState = {
    name: '',  //姓名
    email:''   //邮箱
}

// 首页表单数据
export const formData = (state = defaultState , action = {}) => {
    return {...state, ...{[action.datatype]: action.value}};
}
