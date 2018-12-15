import React, { Component } from 'react';
import './ConfigPanelComponent.scss';
import { Field, reduxForm } from 'redux-form';
import { create } from './ConfigPanelAction';

const validate = (values) => {
    const errors = {};

    if(!values.message) {
        errors.message = 'Vui lòng nhập nội dung tin nhắn';
    }

    return errors;
}

class ConfigPanelComponent extends Component {
    constructor(props) {
        super(props);
    }

    typing = (e) => {
        this.props.typing(e.target.value);
    }

    changeBackgroundSound = (e) => {
        this.props.backgroundSoundChanged(e.target.value);
    }

    handleSubmit = (values) => {
        create(values)
        .then(rs => {
            this.props.callback(rs.data.data.code);
        });
    }

    renderMessageField = ({ input, label, type, meta: { touched, error, warning } }) => {
        return <div className={"form-group" + (touched && error ? " hasError" : "")}>
                    <label htmlFor="message">{label}</label>
                    <div className="editor-container">
                        <textarea {...input} className="form-control" type={type} rows={3} />
                    </div>
                    {touched && error && <span>{error}</span>}
                </div>
    }

    signOut = () => {
        this.props.toggle();
        localStorage.clear();
    }

    render() {
        const { handleSubmit, pristine, reset, submitting, invalid } = this.props;
        return (
            <div className="control-panel-wrapper col-md-12">
                <div className={'config-panel' + (this.props.display ? ' show' : ' hidden')}>
                    <div className="toggle" onClick={this.props.toggle}>|||</div>
                    <div className="panel">
                        <form onSubmit={handleSubmit(this.handleSubmit)}>
                            <div className="form-group">
                                <label htmlFor="backgroundMusic">Nhạc nền</label>
                                <Field type="text" className="form-control" name="background_sound"
                                component="input" onBlur={this.changeBackgroundSound}
                                id="backgroundMusic" placeholder="https://www.nhaccuatui.com/mh/auto/I2jtpWcn3M" />
                                <span className="note">Bạn có thể sử dụng link từ nhaccuatui.com hoặc mp3.zing.vn</span>
                            </div>
                            <Field name="message"
                                component={this.renderMessageField}
                                onChange={this.typing}
                                label="Nội dung tin nhắn"/>
                            <div className="form-group">
                                <button className="btn btn-primary" type="submit" disabled={pristine || submitting || invalid}>Lưu</button>
                                <button className="btn btn-primary pull-right" type="button" onClick={reset}>Đặt Lại</button>
                                <button className="btn btn-danger" type="button" onClick={this.signOut}>Đăng Xuất</button>
                            </div>
                        </form>
                    </div>
                </div>
                {this.props.display && <div className="typo" dangerouslySetInnerHTML={{__html: this.props.config.message}}></div>}
                {this.props.display && this.props.config.backgroundSound && <iframe type="audio/mpeg" title="Background audio" src={this.props.config.backgroundSound} allow="autoplay" id="audio" style={{ display: 'none' }} />}
            </div>
        )
    }
}

export default reduxForm({
    form: 'config',
    validate
})(ConfigPanelComponent);