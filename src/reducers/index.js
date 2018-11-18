import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import TypingReducer from '../pages/christmas/typing/TypingReducer';
import SignInReducer from '../pages/sign_in/SignInReducer';
import SignUpReducer from '../pages/sign_up/SignUpReducer';
import LoadingReducer from '../components/loading/LoadingReducer';
import ChristmasReducer from '../pages/christmas/ChristmasReducer';
import ConfigPanelReducer from '../pages/christmas/config_panel/ConfigPanelReducer';

export default combineReducers({
    typingReducer: TypingReducer,
    signIn: SignInReducer,
    signUp: SignUpReducer,
    loading: LoadingReducer,
    christmas: ChristmasReducer,
    configPanel: ConfigPanelReducer,
    form: formReducer
});