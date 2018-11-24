import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Christmas from './Christmas';
import {
    toggleConfigPanel,
    toggleGetLinkModal,
    addWishSuccess
} from './ChristmasAction';

function mapStateToProps(state) {
    return {
        christmas: state.christmas,
        showGetLinkModal: state.christmas.showGetLinkModal,
        wishLink: state.christmas.wishLink
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleConfigPanel: toggleConfigPanel,
        toggleGetLinkModal: toggleGetLinkModal,
        addWishSuccess: addWishSuccess
    }, dispatch);
}

const ChristmasContainer = connect(mapStateToProps, mapDispatchToProps)(Christmas);
export default ChristmasContainer;