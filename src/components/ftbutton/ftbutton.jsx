import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ftbutton.less'
export default class Ftbutton extends Component{
    static propTypes={
        title:PropTypes.string.isRequired
    }
    render(){
        return(
        <button>{this.props.title}</button>
        );
    }
}