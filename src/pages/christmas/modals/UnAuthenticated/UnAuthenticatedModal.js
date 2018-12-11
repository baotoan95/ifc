import React, { Component } from 'react';
import './UnAuthenticatedModal.scss';

class UnAuthenticated extends Component {
    render() {
        return <div className="modal-container login-require-modal">
                    <div className="modal">
                        <div className="modal-title">Login required</div>
                        <div className="modal-content">
                            <p>This feature allows you change your own message and background music.</p>
                            <p>In order to use this feature. Please sign in!!!</p>
                        </div>
                        <div className="modal-actions">
                            <button className="btn btn-success" onClick={this.props.login}>Sign In</button>
                            <button className="btn btn-danger" onClick={this.props.cancel}>Cancel</button>
                        </div>
                    </div>
                </div>
    }
}

export default UnAuthenticated;