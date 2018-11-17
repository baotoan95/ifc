import React, { Component } from 'react';
import './SignUpComponent.scss';

class SignUpComponent extends Component {
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-sm-4 mx-auto">
                    <div className="sign-up">
                        <h3>Sign Up</h3>
                        <div className="manually">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" />
                                    <small id="emailHelp" className="form-text text-muted">Something happen</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Password</label>
                                    <input type="email" className="form-control" id="password" />
                                    <small id="passwordHelp" className="form-text text-muted">Something happen</small>
                                </div>
                                <button type="submit" className="btn btn-primary">Sign Up</button>
                            </form>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default SignUpComponent;