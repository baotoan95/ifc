import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SignUpComponent from './SignUpComponent';
import {
    signUpSuccess,
    signUpFailure
} from './SignUpActions';

function mapStateToProps(state, ownProps) {
    return {
        signUp: state.signUp
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return bindActionCreators({
        signUpSuccess,
        signUpFailure
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);