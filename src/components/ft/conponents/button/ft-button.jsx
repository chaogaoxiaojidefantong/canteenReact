import React, { Component } from 'react'
import '../../style/button/ft-button.less'
import PropTypes from 'prop-types'
const cssPrefix = "ft-button";
export default class FtButton extends Component{
    static propTypes = {
        backgroundColor:PropTypes.string.isRequired,
        click:PropTypes.func.isRequired,
        submit:PropTypes.func
    }
    
    static defaultProps = { 
        backgroundColor: 'yellow'
    }
    
    styles={
        backgroundColor:this.props.backgroundColor
    }

    submit=()=>{
        this.props.click();
    }

    render(){
        return(
            <div className={cssPrefix}>
                <button style={this.styles} onClick={this.submit}>
                {this.props.children}
                </button>
            </div>
        )
    }
}