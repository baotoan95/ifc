import React, { Component } from 'react';
import './ConfigPanelComponent.scss';

class ConfigPanelComponent extends Component {
    typing = (e) => {
        this.props.typing(e.target.value);
    }

    changeBackgroundSound = (e) => {
        this.props.backgroundSoundChanged(e.target.value);
    }

    render() {
        return (
            <div className="control-panel-wrapper">
                <div className={'config-panel' + (this.props.display ? ' show' : ' hidden')}>
                    <div className="toggle" onClick={this.props.toggle}>|||</div>
                    <div className="panel">
                        <form>
                            <div className="form-group">
                                <label htmlFor="backgroundMusic">Background music</label>
                                <input type="text" className="form-control" onBlur={this.changeBackgroundSound}
                                id="backgroundMusic" placeholder="https://www.nhaccuatui.com/mh/auto/I2jtpWcn3M" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" rows={3} onChange={this.typing} />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary">Note</button>
                            </div>
                        </form>
                    </div>
                </div>
                {this.props.display && <div className="typo" dangerouslySetInnerHTML={{__html: this.props.config.message}}></div>}
                {this.props.config.backgroundSound && <iframe type="audio/mpeg" title="Background audio" src={this.props.config.backgroundSound} allow="autoplay" id="audio" style={{ display: 'none' }} />}
            </div>
        )
    }
}

export default ConfigPanelComponent;