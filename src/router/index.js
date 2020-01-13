import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '@/utils/asyncComponent';
import home from "@/pages/home/home";
import login from '@/pages/login/login'
import AuthButton from '@/pages/login/AuthButton'
import PrivateRoute from '@/pages/public/privateRoute'
export default class RouteConfig extends Component{
    render(){
       return  <HashRouter>
           <div>
           <AuthButton />
            <Switch>    
                <Route path="/login" exact component={login} />
                <PrivateRoute path="/" >
                    <Route   />
                </PrivateRoute>
            </Switch>
            </div>
       </HashRouter>    
    }
}