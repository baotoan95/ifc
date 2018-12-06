import axios from 'axios';
import { SIGN_IN_URL, FETCH_AUTH_INFO } from '../../constants/URLConstants';
import * as SignActionTypes from './SignInActionType';

export const signIn = (credential) => {
    return axios.post(SIGN_IN_URL, credential)
        .then(rs => {
            return rs.data;
        })
        .catch(err => {
            return err;
        });
}

export const signInFailure = (errorMessage) => {
    return {
        type: SignActionTypes.SIGN_IN_FAILURE,
        payload: errorMessage
    }
}

export const fetchAuthInfo = (userId, loginToken) => {
    const config = {
        headers: {
            'token': loginToken,
            'user_id': userId
        }
    }
    return axios.get(FETCH_AUTH_INFO, config)
        .then(rs => {
            return rs.data;
        })
        .catch(err => {
            console.log('fetchAuthInfo', err);
            return err;
        });
}