import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../style/container/ft-container2.less'
const classes='ft-container2'
const [bgClasses,contentClasses]=[classes+'--bg',classes+'--content']
export default class FtContainer2 extends Component {
    static propTypes = {
        // title: PropTypes.string.isRequired
    }
    render() {
        return (
            <div className={classes}>
                <div className={bgClasses} >
                {this.props.children[0]}
                </div> 
                <div className={contentClasses}>
                {this.props.children[1]}
                </div>          
            </div>
        );
    }
}