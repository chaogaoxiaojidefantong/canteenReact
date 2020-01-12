/* eslint-disable default-case */
import React, { Component } from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
class AuthBUtton extends Component{
    state={
        isAuthenticated:false
    }
    componentDidMount(){
    }
    authenticate(cb) {
        this.setState({isAuthenticated:true});
        setTimeout(cb, 100); // fake async
      }
      signout(cb) {
        this.setState({isAuthenticated:false});
        setTimeout(cb, 100);
      }
    render(){
        return(
            <div></div>
        )
    }
}
export default AuthBUtton;