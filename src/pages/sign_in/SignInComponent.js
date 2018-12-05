import React, { Component } from 'react';
import './SignInComponent.scss';
import * as UrlConstants from '../../constants/URLConstants';
import * as Window from '../../utils/Window';
import * as WindowEventType from '../../common/WindowEventType';
import { Field, reduxForm } from 'redux-form';
import { signIn, fetchAuthInfo } from './SignInActions';
import { Link } from "react-router-dom";
import { saveUserInfo } from '../../utils/Authenticator';

const validate = (values) => {
    const errors = {};
    if(!values.username) {
        errors.username = 'Username is required';
    }
    if(!values.password) {
        errors.password = 'Password is required';
    }
    return errors;
}

class SignInComponent extends Component {
    componentDidMount() {
        window.addEventListener(WindowEventType.LOGIN_FACEBOOK, e => {
            // TODO: check user profile and complete profile if necessary
            console.log(e)
            fetchAuthInfo(e.detail.userId, e.detail.loginToken).then(res => {
                const authInfo = {
                    userId: res.user.id,
                    token: res.token
                }
                saveUserInfo(authInfo);
                this.props.history.push('/christmas');
            })
        });
    }

    loginSocial = (type) => {
        if (type === 'facebook') {
            Window.open(UrlConstants.LOGIN_FACEBOOK_URL, 'Login with Facebook', 500, 500);
        } else if (type === 'google') {
            Window.open(UrlConstants.LOGIN_GOOGLE_URL, 'Login with Google', 500, 500);
        }
    }

    loginLocal = (values) => {
        signIn(values).then(rs => {
            if(rs.response && rs.response.status === 400) {
                this.props.signInFailure(rs.response.data.message);
            } else {
                saveUserInfo({
                    userId: rs.user.id,
                    token: rs.token
                });
                this.props.history.push('/christmas');
            }
        });
    }

    renderFormControl = ({ input, label, type, meta: { touched, error, warning } }) => {
        return <div className="form-group">
                    <label htmlFor={label}>{label}</label>
                    <input {...input} type={type} className="form-control" id={label} />
                    {touched && error && <small className="form-text text-muted">{error}</small>}
                </div>
    }

    renderRememberCheckbox = ({ input, label, type, meta: { touched, error, warning } }) => {
        return <div className="form-check">
                    <input {...input} type={type} className="form-check-input" id={label} />
                    <label htmlFor={label}>{label}</label>
                </div>
    }

    render() {
        const { handleSubmit, pristine, submitting, invalid } = this.props;

        return <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-12 mx-auto">
                    <div className="sign-in">
                        <h3>Sign In</h3>
                        {this.props.signIn.resMessage && <div className="sign-in-notification">
                            {this.props.signIn.resMessage}
                        </div>}
                        <div className="manually">
                            <form onSubmit={handleSubmit(this.loginLocal)}>
                                <Field
                                    component={this.renderFormControl}
                                    label="Username"
                                    type="text"
                                    name="username"/>
                                <Field
                                    component={this.renderFormControl}
                                    label="Password"
                                    type="password"
                                    name="password"/>
                                <Field
                                    component={this.renderRememberCheckbox}
                                    label="Remember me"
                                    type="checkbox"
                                    name="remember"/>
                                <button type="submit" disabled={pristine || submitting || invalid}
                                    className="btn btn-primary">Sign In</button>
                            </form>
                        </div>
                        <div className="div">
                            <hr />
                            <span>Or with social network</span>
                        </div>
                        <div className="social">
                            <button className="facebook" onClick={() => this.loginSocial('facebook')}><i className="fab fa-facebook-f"></i> Facebook</button>
                            <button className="google" onClick={() => this.loginSocial('google')}><i className="fab fa-google"></i> Google</button>
                        </div>
                        <div className="driver">
                            Don't have account yet. <Link to="/sign-up">Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default reduxForm({
    form: 'sign-in',
    validate
})(SignInComponent);