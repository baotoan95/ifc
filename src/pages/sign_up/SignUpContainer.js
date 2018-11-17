import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SignUpComponent from './SignUpComponent';

function mapStateToProps(state, ownProps) {
    return {
        signUp: state.signUp
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return bindActionCreators({

    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);