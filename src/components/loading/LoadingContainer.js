import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './LoadingAction';
import LoadingComponent from './LoadingComponent';

function mapStateToProps(state) {
    return {
        loading: state.loading
    }
}

function mapDispatchToProps(dispatch) {
    const { show, hide } = actions;
    return bindActionCreators({
        show: show,
        hide: hide
    }, dispatch);
}

const LoadingContainer = connect(mapStateToProps, mapDispatchToProps)(LoadingComponent);
export default LoadingContainer;