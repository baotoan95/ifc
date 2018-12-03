import * as SignInActionTypes from './SignInActionType';

let initState = {
    resMessage: ''
}

export default (state = initState, action) => {
    switch(action.type) {
        case SignInActionTypes.SIGN_IN_FAILURE:
            return {...state, resMessage: action.payload}
        default: 
            return state;
    }
}