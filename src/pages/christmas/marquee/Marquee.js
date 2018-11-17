import React, { Component } from 'react';
import './Marquee.scss';

import image_g from '../../../assets/images/g.gif';
import image_i from '../../../assets/images/i.gif';
import image_a from '../../../assets/images/a.gif';
import image_n from '../../../assets/images/n.gif';
import image_s from '../../../assets/images/s.gif';
import image_l from '../../../assets/images/l.gif';
import image_h from '../../../assets/images/h.gif';

class Marquee extends Component {
    render() {
        return <div className="marquee-container">
                    <div className="marquee">
                        <img alt="character" src={image_g} />
                        <img alt="character" src={image_i} />
                        <img alt="character" src={image_a} />
                        <img alt="character" src={image_n} />
                        <img alt="character" src={image_g} />
                        <img alt="character" src={image_s} />
                        <img alt="character" src={image_i} />
                        <img alt="character" src={image_n} />
                        <img alt="character" src={image_h} />
                        <img alt="character" src={image_a} />
                        <img alt="character" src={image_n} />
                        <img alt="character" src={image_l} />
                        <img alt="character" src={image_a} />
                        <img alt="character" src={image_n} />
                        <img alt="character" src={image_h} />
                    </div>
                </div>
    }
}

export default Marquee;