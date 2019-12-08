import React, { Component } from 'react';
import MaButton from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { saveFormData, saveImg } from '../../store/home/action';
import PropTypes from 'prop-types';
import Ftbutton from '../../components/ftbutton/ftbutton'
import './home.less'
import store from '../../store/store'
import Api from '@/api/api'
class Home extends Component{
  static propTypes = {
    formData: PropTypes.object.isRequired,
    saveFormData: PropTypes.func.isRequired,
  }
  buttonClick=()=>{
     this.props.formData.name='sansan';
    this.props.saveFormData('33', '22');
    let v=store.getState();
  }
  componentDidMount() {
    let res=Api.getCanteen().then(res=>{
      debugger
    },err=>{
      debugger
    })
  }
    render(){
      return (       
        <div>
          <section className='header'>
            <b>ylw食堂</b><b>首页</b><b>我的订单</b><b>三三</b>
            <button onClick={this.buttonClick}>点击</button>
            <Ftbutton title='ft'></Ftbutton>
          </section>
      </div>)
    }
}
// export default connect(state => ({
// }, {
//   saveFormData
// }))(Home);
const stateProp=((state)=>{
  return {formData: state.formData,
    proData: state.proData}
})
export default connect(stateProp,{saveFormData})(Home);