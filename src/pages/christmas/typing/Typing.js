import React, { Component } from 'react';
import './Typing.scss';

class Typing extends Component {
    constructor(props) {
        super(props);
        this.props.initMessage();
    }
    
    componentDidMount() {
        let count = 0;
        const interval = setInterval(() => {
            this.props.typing(count++);
            if(this.refs.typo) {
            this.refs.typo.innerHTML = this.props.typer.message;
                if(this.props.typer.rest === 0) {
                    clearInterval(interval);
                }
            }
        }, 50);
    }

    render() {
        return <div id="typo" ref="typo"/>
    }
}

export default Typing;