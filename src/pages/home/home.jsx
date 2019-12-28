import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveFormData, saveImg } from '../../store/home/action';
import PropTypes from 'prop-types';
import './home.less'
import store from '../../store/store'
import api from '@/api/api'
class Home extends Component{
  static propTypes = {
    formData: PropTypes.object,
     saveFormData: PropTypes.func.isRequired
  }
  buttonClick=()=>{
    //this.props.formData.name='sansan';
    this.props.saveFormData('sansan','name');
    let v=store.getState();
    debugger
  }
  componentDidMount() {
    let res=api.getCanteen().then(res=>{
    },err=>{
    })
  }
    render(){
      return (       
        <div>
          <section className='header'>
            <b>ylw食堂</b><b>首页</b><b>我的订单</b><b>三三</b>
            <button onClick={this.buttonClick}>登录页</button>
          </section>
      </div>)
    }
}

const stateProp=((state)=>{
  return {
    }
})
export default connect(stateProp,{saveFormData})(Home);