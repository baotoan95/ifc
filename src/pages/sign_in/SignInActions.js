import axios from 'axios';
import { SIGN_IN_URL } from '../../constants/URLConstants';
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