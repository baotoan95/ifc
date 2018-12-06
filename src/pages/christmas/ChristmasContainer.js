import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Christmas from './Christmas';
import * as actions from './ChristmasAction';

function mapStateToProps(state) {
    return {
        christmas: state.christmas,
        showGetLinkModal: state.christmas.showGetLinkModal,
        wishLink: state.christmas.wishLink,
        modalType: state.christmas.modalType,
        wish: state.christmas.wish
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleConfigPanel: actions.toggleConfigPanel,
        toggleGetLinkModal: actions.toggleGetLinkModal,
        addWishSuccess: actions.addWishSuccess,
        setModalType: actions.setModalType,
        fetchWishSuccess: actions.fetchWishSuccess
    }, dispatch);
}

const ChristmasContainer = connect(mapStateToProps, mapDispatchToProps)(Christmas);
export default ChristmasContainer;