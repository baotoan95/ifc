import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggle } from './ChristmasAction';
import Christmas from './Christmas';

function mapStateToProps(state) {
    return {
        christmas: state.christmas
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleConfigPanel: toggle
    }, dispatch);
}

const ChristmasContainer = connect(mapStateToProps, mapDispatchToProps)(Christmas);
export default ChristmasContainer;