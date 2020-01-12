/* eslint-disable default-case */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import './login.less'
import {FtContainer,FtContainer2,FtButton} from '../../components/ft/index'
import bgsrc from '../../assets/leimu.jpg'
import PropTypes from 'prop-types';
import {login} from '../../store/user/action'
import store from '../../store/store'
import {loginData} from '../../store/user/action-type'
import api from '../../api/api'
class Login extends Component{
    // static propTypes={
    //     login:PropTypes.func
    // }
     state={
        loginParam:{
            userEmail:'',
            userPwd:''
        }
    }

    updateInput = userPwd => {
        let data=Object.assign(this.state.loginParam,{userPwd:userPwd})
        this.setState({loginParam:data});
      };

    submit=()=>{
        //this.props.login(this.state.loginParam); 
        api.login(this.state.loginParam).then(res=>{
            const {status,msg}=res
            if(status==200){
                alert(msg);
                const {data}=res
                localStorage.setItem('user',JSON.stringify(data));
                setTimeout(()=>{
                    const {history}=this.props;
                    history.push('');
                    },2000);                       
            }
        },err=>{
            debugger
        })  
        
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
                <input type='password' placeholder='password' value={this.state.loginParam.userPwd} onChange={e => this.updateInput(e.target.value)}/>
              <FtButton backgroundColor='red' click={this.submit}>登录</FtButton>
            </FtContainer>  
            </FtContainer2>                                  
            </div>
        )}
}

const mapStateToProps=(state)=>{              
        return {
            loginGo:state.loginGo
        }
}

export default connect(mapStateToProps,{login})(Login);