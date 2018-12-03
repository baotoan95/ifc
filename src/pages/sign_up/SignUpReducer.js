import * as Actions from './SignUpActions';

let initState = {
    signUpSuccess: false,
    resMessage: ''
}
export default (state = initState, action) => {
    switch(action.type) {
        case Actions.SIGN_UP_SUCCESS:
            return {...state, signUpSuccess: true, resMessage: ''}
        case Actions.SIGN_UP_FAILURE:
            const errMessage = action.payload.response.data.message;
            return {...state, signUpSuccess: false, resMessage: errMessage}
        default:
            return state;
    }
}