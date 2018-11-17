import React, { Component } from 'react';
import './Christmas.scss';
import Santa from './santa/Santa';
import Marquee from './marquee/Marquee';
import TypingContainer from './typing/TypingContainer';
import SnowStorm from './snow/SnowStorm';
import ConfigPanelContainer from './config_panel/ConfigPanelContainer';

import image_lights2 from '../../assets/images/lights2.gif';
import image_topLeft from '../../assets/images/top-left.png';
import image_topRight from '../../assets/images/top-right.png';
import image_footer from '../../assets/images/footer.png';
import image_pine1 from '../../assets/images/tree.gif';
import image_pine2 from '../../assets/images/tree2.gif';
import image_tree from '../../assets/images/tree.png';
import image_house from '../../assets/images/home.gif';
import image_snowman from '../../assets/images/snowman.png';
import image_angel from '../../assets/images/angel.gif';
import image_big_glow from '../../assets/images/big-glow.png';
import image_small_glow from '../../assets/images/small-glow.png';
import canvas_background from '../../assets/images/bg.png';

import sound_background from '../../assets/sounds/WeWishYouAMerryChristmasBeat-Unk_ujah.mp3';

import Fireworks from './fireworks/fireworks';

class Christmas extends Component {
    firework = null;

    componentDidMount() {
        const bigGlow = document.createElement('img');
        bigGlow.src = image_big_glow;
        const smallGlow = document.createElement('img');
        smallGlow.src = image_small_glow;
        const background = document.createElement('img');
        background.src = canvas_background;
        const Library = {
            bigGlow: bigGlow,
            smallGlow: smallGlow,
            background: background
        };

        setTimeout(() => {
            this.firework = new Fireworks(Library);
            this.firework.initialize();
            window.onresize = () => {
                this.firework.onWindowResize();
            };
        }, 1000);
    }

    render() {
        return <div className="christmas-container">
            {/* Hiding library elements in the DOM is fun */}
            <aside id="library" style={{ display: 'none' }}>
                <img src={image_big_glow} id="big-glow" alt="I" />
                <img src={image_small_glow} id="small-glow" alt="I" />
                <img src={canvas_background} id="canvas-background" alt="I" />
            </aside>

            <ConfigPanelContainer display={this.props.christmas.showConfigPanel} toggle={this.props.toggleConfigPanel}/>

            <div id={'content' + (this.props.christmas.showConfigPanel ? ' scale' : '')}>
                <img alt="lights" className="lights" src={image_lights2} />
                <header />
                <Marquee />
                <img alt="top-left" className="top-left" src={image_topLeft} />
                <img alt="top-right" className="top-right" src={image_topRight} />
                {!this.props.christmas.showConfigPanel && <TypingContainer />}
                <img alt="footer" className="footer" src={image_footer} />
                <img alt="pine1" className="pine1" src={image_pine1} />
                <img alt="pine2" className="pine2" src={image_pine2} />
                <img alt="tree" className="tree" src={image_tree} />
                <img alt="home" className="home" src={image_house} />
                <img alt="snowman" className="snowman" src={image_snowman} />
                <img alt="angel" className="angel" src={image_angel} />
                <img alt="angel2" className="angel2" src={image_angel} />
                <Santa />
            </div>
            {!this.props.christmas.showConfigPanel && <iframe type="audio/mpeg" title="Background audio" src={sound_background} allow="autoplay" id="audio" style={{ display: 'none' }} />}
            {/* <SnowStorm /> */}
        </div>
    }
}

export default Christmas;