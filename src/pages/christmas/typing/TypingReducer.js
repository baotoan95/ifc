import * as TypingAction from './TypingAction';

let messageStore = "";
const POINTER = "|";
const initState = {message: "", rest: 0}

export default (state = initState, action) => {
    switch(action.type) {
        case TypingAction.INIT_MESSAGE:
            messageStore = action.payload;
            return {state, message: "", rest: messageStore.length};
        case TypingAction.TYPING:
            state = {
                ...state,
                message: messageStore.substr(0, action.payload).concat(POINTER),
                rest: messageStore.length - action.payload
            };
            return state;
        default:
            return state;
    }
}