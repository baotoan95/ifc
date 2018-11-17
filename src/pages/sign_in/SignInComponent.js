import React, { Component } from 'react';
import './SignInComponent.scss';
import * as UrlConstants from '../../constants/URLConstants';
import * as Window from '../../utils/Window';
import * as WindowEventType from '../../common/WindowEventType';

class SignInComponent extends Component {
    componentDidMount() {
        window.addEventListener(WindowEventType.LOGIN_FACEBOOK, e => {
            // TODO: check user profile and complete profile if necessary
            localStorage.setItem('userId', e.detail.userId);
            this.props.history.push('/christmas');
        });
    }

    login = (type) => {
        if (type === 'facebook') {
            Window.open(UrlConstants.LOGIN_FACEBOOK_URL, 'Login with Facebook', 500, 500);
        } else if (type === 'google') {
            Window.open(UrlConstants.LOGIN_GOOGLE_URL, 'Login with Google', 500, 500);
        }
    }

    render() {
        return <div className="container">
            <div className="row">
                <div className="col-sm-4 mx-auto">
                    <div className="sign-in">
                        <h3>Sign In</h3>
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
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="remember" />
                                    <label className="form-check-label" htmlFor="remember">Remember me</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Sign In</button>
                            </form>
                        </div>
                        <div className="div">
                            <hr />
                            <span>Or with social network</span>
                        </div>
                        <div className="social">
                            <button className="facebook" onClick={() => this.login('facebook')}><i className="fab fa-facebook-f"></i> Facebook</button>
                            <button className="google" onClick={() => this.login('google')}><i className="fab fa-google"></i> Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default SignInComponent;