import * as LoadingAction from './LoadingAction';

export default (state = false, action) => {
    switch(action.type) {
        case LoadingAction.SHOW_LOADING:
            state = true;
            return state;
        case LoadingAction.HIDE_LOADING:
            state = false;
            return state;
        default:
            return state;
    }
}