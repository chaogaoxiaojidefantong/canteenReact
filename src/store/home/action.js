import * as home from './action-type';
// 保存表单数据
export const saveFormData = (value, datatype) => {
    return {
      type: 'hehe',
      value,
      datatype,
    }
  }

  // 保存图片地址
export const saveImg = path => {
  return {
    type: home.SAVEFORMDATA,
    path
  }
}