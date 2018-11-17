import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Typing from './Typing';
import { typing, initMessage } from './TypingAction';

function mapStateToProps(state) {
    return {
        typer: state.typingReducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        initMessage: initMessage,
        typing: typing
    }, dispatch);
}
const TypingContainer = connect(mapStateToProps, mapDispatchToProps)(Typing);
export default TypingContainer;