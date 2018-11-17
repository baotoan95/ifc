import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './ConfigPanelAction';
import ConfigPanelComponent from './ConfigPanelComponent';

function mapStateToProps(state) {
    return {
        config: state.configPanel
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        typing: actions.typing,
        backgroundSoundChanged: actions.backgroundSoundChanged
    }, dispatch);
}

const ConfigPanelContainer = connect(mapStateToProps, mapDispatchToProps)(ConfigPanelComponent);
export default ConfigPanelContainer;