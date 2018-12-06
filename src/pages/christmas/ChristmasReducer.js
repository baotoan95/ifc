import * as ChristmasAction from './ChristmasAction';
import ChristmasContainer from './ChristmasContainer';

let initState = {
    showConfigPanel: false,
    showGetLinkModal: false,
    wishLink: '',
    modalType: 'normal',
    wish: {}
}
export default (state = initState, action) => {
    switch(action.type) {
        case ChristmasAction.TOGGLE_CONFIG_PANEL:
            return {...state, showConfigPanel: !state.showConfigPanel};
        case ChristmasAction.TOGGLE_GET_LINK_MODAL:
            return {...state, showGetLinkModal: !state.showGetLinkModal};
        case ChristmasAction.ADD_WISH_SUCCESS:
            return {...state, wishLink: action.payload, showConfigPanel: !state.showConfigPanel, showGetLinkModal: !state.showGetLinkModal};
        case ChristmasAction.SET_MODAL_TYPE:
            return {...state, modalType: action.payload};
        case ChristmasAction.GET_WISH_SUCCESS:
            return {...state, wish: action.payload}
        default:
            return state;
    }
}