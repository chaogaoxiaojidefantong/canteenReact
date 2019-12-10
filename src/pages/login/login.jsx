import React, { Component } from 'react';
import { connect } from 'react-redux';
import './login.less'
class Login extends Component{
    render(){
        return (  
            <div>
            <input type='text' placeholder='email'/>
            <input type='password'/>                      
            </div>
        )}
}
export default connect()(Login);