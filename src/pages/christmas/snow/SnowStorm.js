import React, { Component } from 'react';
import './SnowStorm.scss';
import SnowFlake from './SnowFlake';

class SnowStorm extends Component {
    componentDidMount() {
        const snowFlake = new SnowFlake();
        setTimeout(() => {
            snowFlake.init(document.getElementById('snow'));
        }, 400);
    }

    render() {
        return <div id="snow"></div>
    }
}

export default SnowStorm;