import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '@/utils/asyncComponent';
import home from "@/pages/home/home";
import login from '@/pages/login/login'
export default class RouteConfig extends Component{
    render(){
       return  <HashRouter>
            <Switch>
            <Route path="/" exact component={home} />
            <Route path="/login" exact component={login} />
            </Switch>
       </HashRouter>    
    }
}