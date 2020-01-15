/* eslint-disable default-case */
import React, { Component } from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import authenticate from '../../libs/authenticate'
class AuthBUtton extends Component{
    // state={
    //     isAuthenticated:false
    // }
    history=this.props.history;
    componentDidMount(){
        let f=authenticate.isAuthenticated
    }

    render(){
        return authenticate.isAuthenticated ? (
            <p>
              Welcome!{" "}
              <button
                onClick={() => {
                    authenticate.signout(() => this.history.replace('/login'));
                }}
              >
                Sign out
              </button>
            </p>
          ) : (
            <p>You are not logged in.</p>
          );
    }
}
export default AuthBUtton;