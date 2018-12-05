import axios from 'axios';
import * as URLs from '../../../constants/URLConstants';

export const TYPING = 'TYPING';
export const BACKGROUND_SOUND_CHANGED = 'BACKGROUND_SOUND_CHANGED';
export const CREATE_WISH_SUCCESS = 'CREATE_WISH_SUCCESS';
export const CREATE_WISH_FAILURE = 'CREATE_WISH_SUCCESS';
export const UPDATE_WISH_SUCCESS = 'UPDATE_WISH_SUCCESS';
export const UPDATE_WISH_FAILURE = 'UPDATE_WISH_FAILURE';



export const typing = (text) => {
    return {
        type: TYPING,
        payload: text
    }
}

export const backgroundSoundChanged = (url) => {
    return {
        type: BACKGROUND_SOUND_CHANGED,
        payload: url
    }
}

export const create = async (wish) => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token')
        }
    }
    return await axios.post(URLs.WISHES_URL, wish, config);
}