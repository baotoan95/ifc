import * as ChristmasAction from './ChristmasAction';

let initState = {
    showConfigPanel: false
}
export default (state = initState, action) => {
    switch(action.type) {
        case ChristmasAction.TOGGLE_CONFIG_PANEL:
            state = {...state, showConfigPanel: !state.showConfigPanel};
            return state;
        default:
            return state;
    }
}