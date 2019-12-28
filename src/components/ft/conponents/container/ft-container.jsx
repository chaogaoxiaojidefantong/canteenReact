import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../style/container/ft-container.less'
export default class FtContainer extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    }
    getTime = () => {
        return new Date().toLocaleTimeString();
    }
    render() {
        return (
            <div className='ft-container'>
                {this.props.children}
            </div>
        );
    }
}