import React, { Component } from 'react';
import './CommunicateComponent.scss';

class CommunicateComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col logo">
            <h3>IFC</h3>
          </div>
          <div className="col-md-auto"></div>
          <div className="col notification">
            <i className="fas fa-bell bell"></i>
          </div>
        </div>

        <div className="row main">
          <div className="col-sm-3">
            <div className="side-panel">
              {/* User info */}
              <div className="col-sm-12 user-info">
                <div className="media">
                  <img className="align-self-center mr-3 online" src="http://emilcarlsson.se/assets/mikeross.png" alt="Generic placeholder" />
                  <div className="media-body">
                    <h5 className="mt-0">Bao Toan</h5>
                    Cras sit amet nibh libero, in gravida nulla.
                    </div>
                </div>
              </div>

              <div className="search">
                <input type="text" className="form-control" placeholder="Search..."/>
              </div>

              {/* Contacts */}
              <div className="col-sm-12 contact-wrapper">
                <div className="title">Contacts <i className="fa fa-window-close"></i></div>
                <div className="contacts">
                <div className="media">
                  <img className="align-self-center mr-3" src="http://emilcarlsson.se/assets/mikeross.png" alt="Generic placeholder" />
                  <div className="media-body">
                    <h5 className="mt-0">Bao Toan</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    </div>
                </div>
                <div className="media active">
                  <img className="align-self-center mr-3" src="http://emilcarlsson.se/assets/mikeross.png" alt="Generic placeholder" />
                  <div className="media-body">
                    <h5 className="mt-0">Bao Toan</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    </div>
                </div>
                <div className="media">
                  <img className="align-self-center mr-3" src="http://emilcarlsson.se/assets/mikeross.png" alt="Generic placeholder" />
                  <div className="media-body">
                    <h5 className="mt-0">Bao Toan</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    </div>
                </div>
                <div className="media">
                  <img className="align-self-center mr-3" src="http://emilcarlsson.se/assets/mikeross.png" alt="Generic placeholder" />
                  <div className="media-body">
                    <h5 className="mt-0">Bao Toan</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    </div>
                </div>
                <div className="media">
                  <img className="align-self-center mr-3" src="http://emilcarlsson.se/assets/mikeross.png" alt="Generic placeholder" />
                  <div className="media-body">
                    <h5 className="mt-0">Bao Toan</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    </div>
                </div>
                <div className="media">
                  <img className="align-self-center mr-3" src="http://emilcarlsson.se/assets/mikeross.png" alt="Generic placeholder" />
                  <div className="media-body">
                    <h5 className="mt-0">Bao Toan</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    </div>
                </div>
                <div className="media">
                  <img className="align-self-center mr-3" src="http://emilcarlsson.se/assets/mikeross.png" alt="Generic placeholder" />
                  <div className="media-body">
                    <h5 className="mt-0">Bao Toan</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    </div>
                </div>
                <div className="media">
                  <img className="align-self-center mr-3" src="http://emilcarlsson.se/assets/mikeross.png" alt="Generic placeholder" />
                  <div className="media-body">
                    <h5 className="mt-0">Bao Toan</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    </div>
                </div>
                </div>
              </div>

              <div className="row actions">
                <div className="col"><i className="fas fa-user-friends"></i> Friends</div>
                <div className="col"><i className="fas fa-user-plus"></i> Add friend</div>
              </div>
            </div>
          </div>

          {/* Chat panel */}
          <div className="col-sm-9 chat-panel">
            <div className="conversation-info">
              <div className="media">
                  <img className="align-self-center mr-3" src="http://emilcarlsson.se/assets/mikeross.png" alt="Generic placeholder" />
                  <div className="media-body">
                    <h5 className="mt-0">Bao Toan</h5>
                    Nothing is impossible
                  </div>
              </div>
            </div>
            <div className="conversation">
              <div className="media receiver">
                <img className="mr-3 no-border message-avatar" src="http://emilcarlsson.se/assets/mikeross.png" alt="Generic placeholder"/>
                <div className="media-body message-content">
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
              </div>
              <div className="media sender">
                <div className="media-body message-content">
                  Cras sit amet nibh libero
                </div>
              </div>
            </div>
            <div className="message-input">
              <div className="wrap">
                <input type="text" placeholder="Input your message here..."/>
                <i className="fa fa-paperclip attachment"></i>
                <button><i className="fa fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default CommunicateComponent;
