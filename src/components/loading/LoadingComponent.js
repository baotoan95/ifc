import React, { Component } from 'react';
import loadingIcon from '../../assets/images/loading-icon.gif';
import './LoadingComponent.scss';

class LoadingComponent extends Component {
    render() {
        return <div className={this.props.loading ? 'loading' : 'loading hidden'}>
                    <img src={loadingIcon} alt="Loading" />
                </div>
    }
}

export default LoadingComponent;