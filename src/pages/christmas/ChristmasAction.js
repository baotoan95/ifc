export const TOGGLE_CONFIG_PANEL = 'TOGGLE_CONFIG_PANEL';
export const ADD_WISH_SUCCESS = 'ADD_WISH_SUCCESS';
export const TOGGLE_GET_LINK_MODAL = 'TOGGLE_GET_LINK_MODAL';
export const SET_MODAL_TYPE = 'SET_MODAL_TYPE';

export const toggleConfigPanel = () => {
    return {
        type: TOGGLE_CONFIG_PANEL
    }
}

export const addWishSuccess = (code) => {
    return {
        type: ADD_WISH_SUCCESS,
        payload: code
    }
}

export const toggleGetLinkModal = () => {
    return {
        type: TOGGLE_GET_LINK_MODAL
    }
}

export const setModalType = (type) => {
    return {
        type: SET_MODAL_TYPE,
        payload: type
    }
}