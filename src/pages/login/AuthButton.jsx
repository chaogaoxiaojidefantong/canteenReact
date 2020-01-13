/* eslint-disable default-case */
import React, { Component } from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import authenticate from '../../libs/authenticate'
class AuthBUtton extends Component{
    // state={
    //     isAuthenticated:false
    // }
    componentDidMount(){
        let f=authenticate.isAuthenticated
        debugger
    }

    render(){
        return authenticate.isAuthenticated ? (
            <p>
              Welcome!{" "}
              <button
                onClick={() => {
                    authenticate.signout(() => window.history.push("/"));
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