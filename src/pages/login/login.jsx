/* eslint-disable default-case */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './login.less'
import {FtContainer,FtContainer2,FtButton} from '../../components/ft/index'
import bgsrc from '../../assets/leimu.jpg'
import PropTypes from 'prop-types';
import {login} from '../../store/user/action'
class Login extends Component{
    // static propTypes={
    //     loginParam:PropTypes.object
    // }

     state={
        loginParam:{
            userEmail:'',
            userPwd:''
        }
    }

    submit=()=>{
        let p=this.state.loginParam
        debugger
        login(this.state.loginParam);
    }
    componentDidMount() {

    }
    handleInput=(type,event)=>{
        let val=event.target.value;
        switch(type){
            case 'email':
                {
                let data=Object.assign(this.state.loginParam,{userEmail:val})
                this.setState({loginParam:data});
                break;
                }
                
        }
    }
    render(){
        return (  
            <div> 
            <FtContainer2>
            <img src={bgsrc} alt='wu'/>
            <FtContainer title='sasnan'>
                <input type='text' placeholder='email' value={this.state.loginParam.userEmail} onChange={this.handleInput.bind(this,'email')}/>
                <input type='password' placeholder='password' value={this.state.loginParam.userPwd}/>
              <FtButton backgroundColor='red' click={this.submit}>登录</FtButton>
            </FtContainer>  
            </FtContainer2>                                  
            </div>
        )}
}
export default connect()(Login);