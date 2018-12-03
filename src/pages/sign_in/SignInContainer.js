import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SignInComponent from './SignInComponent';
import { signInFailure } from './SignInActions';

function mapStateToProps(state, ownProps) {
    return {
        signIn: state.signIn
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return bindActionCreators({
        signInFailure
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent);