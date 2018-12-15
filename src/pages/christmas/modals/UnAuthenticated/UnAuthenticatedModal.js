import React, { Component } from 'react';
import './UnAuthenticatedModal.scss';

class UnAuthenticated extends Component {
    render() {
        return <div className="modal-container login-require-modal">
                    <div className="modal">
                        <div className="modal-title">Thông báo</div>
                        <div className="modal-content">
                            <p>Chức năng này cho phép bạn thay đổi nội dung tin nhắn và nhạc nền.</p>
                            <p>Để sử dụng chức năng này, vui lòng đăng nhập!!!</p>
                        </div>
                        <div className="modal-actions">
                            <button className="btn btn-success" onClick={this.props.login}>Đăng Nhập</button>
                            <button className="btn btn-danger" onClick={this.props.cancel}>Để Sau</button>
                        </div>
                    </div>
                </div>
    }
}

export default UnAuthenticated;