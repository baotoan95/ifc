import React, { Component } from 'react';
import './ConfigPanelComponent.scss';

class ConfigPanelComponent extends Component {
    render() {
        return (
            <div className={'config-panel' + (this.props.display ? ' show' : ' hidden')}>
                <div className="toggle" onClick={this.props.toggle}>|||</div>
                <form>
                    <div className="form-group">
                        <label htmlFor="backgroundMusic">Background music</label>
                        <input type="text" className="form-control" id="backgroundMusic" placeholder="https://www.nhaccuatui.com/mh/auto/I2jtpWcn3M" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" id="message" rows={3} defaultValue={""} />
                    </div>
                </form>
            </div>
        )
    }
}

export default ConfigPanelComponent;