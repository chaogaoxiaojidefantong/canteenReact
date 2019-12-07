import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveFormData } from '@/store/home/action';
class Home extends Component{
    render(){
      return (
        <div>
        <h2>Home</h2>
      </div>)
    }
}
export default connect(state => ({
}, {
  saveFormData
}))(Home);