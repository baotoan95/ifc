import * as ConfigPanelAction from './ConfigPanelAction';

const defaultState = {
    backgroundSound: '',
    message: ''
}
export default (state = defaultState, action) => {
    switch(action.type) {
        case ConfigPanelAction.TYPING:
            return {...state, message: action.payload}
        case ConfigPanelAction.BACKGROUND_SOUND_CHANGED:
            return {...state, backgroundSound: action.payload}
        default:
            return state;
    }
}