import React, { Component } from 'react';
import LoadingContainer from '../loading/LoadingContainer';
import queryString from 'query-string';
import * as WindowEventType from '../../common/WindowEventType';

class SocialAuth extends Component {
    componentDidMount() {
        const query = this.props.location ? this.props.location.search : "";
        const queryParams = queryString.parse(query);

        console.log(queryParams);

        if(!queryParams || !queryParams.type) {
            this.props.history.push('/');
            return;
        }

        const socialType = queryParams.type;
        if(socialType === 'facebook') {
            this.handleLoginFacebook(queryParams);
        }
    }

    handleLoginFacebook(query) {
        window.opener.dispatchEvent(new CustomEvent(WindowEventType.LOGIN_FACEBOOK, {
            detail: {
                userId: query.userId
            }
        }));
        window.close();
    }

    render() {
        return <LoadingContainer />
    }
}

export default SocialAuth;