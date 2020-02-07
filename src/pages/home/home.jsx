import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveFormData, saveImg } from '../../store/home/action';
import PropTypes from 'prop-types';
import './home.less'
import store from '../../store/store'
import api from '@/api/api'
import Button from '@material-ui/core/Button';
class Home extends Component{
  static propTypes = {
    formData: PropTypes.object,
    saveFormData: PropTypes.func.isRequired
  }
  state={
    user:''
  }
  buttonClick=()=>{
    //this.props.formData.name='sansan';
    this.props.saveFormData('sansan','name');
    let v=store.getState();
    let b={['sansan']:'vv'};
  }
  componentDidMount() {
    this.initData();
    //let v=store.getState();
  }
  initData(){
    this.getUser();
    this.getCanteen();
  }
  /**
   * 加载用户信息
   */
  getUser(){
  const user= {user:JSON.parse(localStorage.getItem('user'))};
  let state=this.state;
   state={...state,...user}
   debugger
  this.setState(state);
  }
  /**
   * 加载食堂信息
   */
  getCanteen(){
    let res=api.getCanteen().then(res=>{
    },err=>{
    })
  }

    render(){
      return (       
        <div>
          <section className='header'>
      <b>ylw食堂</b><b>首页</b><b>我的订单</b>
      <button>{this.state.user.userName}</button>
          </section>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
      </div>)
    }
}

const stateProp=((state)=>{
  return {
    }
})
export default connect(stateProp,{saveFormData})(Home);