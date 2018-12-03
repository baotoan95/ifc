import axios from 'axios';
import { SIGN_UP_URL } from '../../constants/URLConstants';

export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const signUp = (user) => {
    return axios.post(SIGN_UP_URL, user)
        .then(rs => {
            return rs.data;
        })
        .catch(err => {
            return err;
        });
}

export const signUpSuccess = () => {
    return {
        type: SIGN_UP_SUCCESS
    }
}

export const signUpFailure = (error) => {
    return {
        type: SIGN_UP_FAILURE,
        payload: error
    }
}