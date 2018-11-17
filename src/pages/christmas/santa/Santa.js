import React, { Component } from 'react';
import './Santa.scss';

class Santa extends Component {
    componentDidMount() {
        setInterval(() => {
            var x = Math.ceil(Math.random() * window.innerWidth - 100);
            var y = Math.ceil(Math.random() * window.innerHeight - 100);

            const santa = this.refs.santa;
            santa.style.left = x + 'px';
            santa.style.top = y + 'px';
        }, 5000);
    }

    render() {
        return <div id="santa" ref="santa"/>
    }
}

export default Santa;