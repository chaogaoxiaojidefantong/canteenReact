import React, { Component } from 'react';
import {  Route, Redirect } from 'react-router-dom';
import authenticate from '../../libs/authenticate'
class PrivateRoute extends Component{

  componentDidMount(){

  }

  render(){
      return(
        <Route
        {...this.props.rest}
        render={({ location }) =>
        authenticate.isAuthenticated ? (
          this.props.children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
      //<div><button>按钮</button></div>
      )
  }
}

  export default PrivateRoute;