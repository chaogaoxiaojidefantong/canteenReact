import * as home from './action-type';

let defaultState = {
    name: '' //姓名
}
// 首页表单数据
export const formData = (state = defaultState , action = {}) => {
    return {...state, ...{[action.datatype]: action.value}};
    //return null;
}

