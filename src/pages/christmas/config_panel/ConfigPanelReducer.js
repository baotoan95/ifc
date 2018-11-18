import * as ConfigPanelAction from './ConfigPanelAction';

const defaultState = {
    backgroundSound: '',
    message: '',
    submitted: false
}
export default (state = defaultState, action) => {
    switch(action.type) {
        case ConfigPanelAction.TYPING:
            return {...state, message: action.payload}
        case ConfigPanelAction.BACKGROUND_SOUND_CHANGED:
            return {...state, backgroundSound: action.payload}
        case ConfigPanelAction.CREATE_WISH_SUCCESS:
            return {...state, submitted: true}
        default:
            return state;
    }
}