/* eslint-disable default-case */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './login.less'
import {FtContainer,FtContainer2,FtButton} from '../../components/ft/index'
import bgsrc from '../../assets/leimu.jpg'
import PropTypes from 'prop-types';
import {login} from '../../store/user/action'
import store from '../../store/store'
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
        login(this.state.loginParam);
    }

    componentDidMount() {
        let v=store.getState();
        debugger
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
            case 'pwd':{
                let data=Object.assign(this.state.loginParam,{userPwd:val})
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
                <input type='password' placeholder='password' value={this.state.loginParam.userPwd} onChange={this.handleInput.bind(this,'pwd')}/>
              <FtButton backgroundColor='red' click={this.submit}>登录</FtButton>
            </FtContainer>  
            </FtContainer2>                                  
            </div>
        )}
}

const mapStateToProps=(state)=>{       
        return {user:state.loginGo}
}

export default connect(mapStateToProps,{login})(Login);