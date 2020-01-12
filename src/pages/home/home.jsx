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
  buttonClick=()=>{
    //this.props.formData.name='sansan';
    this.props.saveFormData('sansan','name');
    let v=store.getState();
    let b={['sansan']:'vv'};
  }
  componentDidMount() {
    let res=api.getCanteen().then(res=>{
    },err=>{
    })
    let v=store.getState();
  }
    render(){
      return (       
        <div>
          <section className='header'>
            <b>ylw食堂</b><b>首页</b><b>我的订单</b><b>三三</b>
            <button onClick={this.buttonClick}>登录页</button>
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