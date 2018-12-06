import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import './SignUpComponent.scss';
import { validateEmail } from '../../utils/ValidationUtils';
import { signUp } from './SignUpActions';
import { Link } from "react-router-dom";

const validate = (values) => {
    const errors = {};
    if(!values.username.trim()) {
        errors.username = 'Username is required';
    }
    if(!values.password.trim()) {
        errors.password = 'Password is required';
    }
    if(!values.email) {
        errors.email = 'Email is required';
    } else if(!validateEmail(values.email)) {
        errors.email = 'Email is invalid';
    }
    if(!values.name.trim()) {
        errors.name = 'Name is required';
    }
    return errors;
}

class SignUpComponent extends Component {
    renderFormControl = ({ input, label, type, meta: { touched, error, warning } }) => {
        return <div className="form-group">
                    <label htmlFor={label}>{label}</label>
                    <input {...input} type={type} className="form-control" id={label} />
                    {touched && error && <small className="form-text text-muted">{error}</small>}
                </div>
    }

    handleSignUp = (values) => {
        signUp(values).then(rs => {
            if(rs.statusCode === 200) {
                this.props.history.push('/sign-in');
            } else {
                this.props.signUpFailure(rs);
            }
        });;
    }

    render() {
        const { handleSubmit, pristine, submitting, invalid } = this.props;
        return <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 mx-auto">
                            <div className="sign-up">
                                <h3>Sign Up</h3>
                                {this.props.signUp.resMessage && <div className="sign-up-notification">
                                    {this.props.signUp.resMessage}
                                </div>}
                                <div className="manually">
                                    <form onSubmit={handleSubmit(this.handleSignUp)}>
                                        <Field 
                                            component={this.renderFormControl}
                                            label="Username"
                                            type="text"
                                            name="username"
                                            />
                                        <Field 
                                            component={this.renderFormControl}
                                            label="Password"
                                            type="password"
                                            name="password"
                                            />
                                        <Field 
                                            component={this.renderFormControl}
                                            label="Email"
                                            type="email"
                                            name="email"
                                            />
                                        <Field 
                                            component={this.renderFormControl}
                                            label="Name"
                                            type="text"
                                            name="name"
                                            />
                                        Have an account? <Link to="/sign-in">Sign in</Link>
                                        <button type="submit" 
                                            disabled={pristine || submitting || invalid}
                                            className="btn btn-primary">Sign Up</button>
                                    </form>
                                </div>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>
    }
}

export default reduxForm({
    form: 'sign-up',
    validate
})(SignUpComponent);