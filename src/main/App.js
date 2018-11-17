import React, { Component } from 'react';
import './App.scss';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignInContainer from '../pages/sign_in/SignInContainer';
import SignUpContainer from '../pages/sign_up/SignUpContainer';
import ChristmasContainer from '../pages/christmas/ChristmasContainer';
import CommunicateContainer from '../pages/communicate/CommunicateComponent';
import LoadingContainer from '../components/loading/LoadingContainer';
import SocialAuth from '../components/social_auth/SocialAuth';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={CommunicateContainer} />
            <Route path='/sign-in' component={SignInContainer} />
            <Route path='/sign-up' component={SignUpContainer} />
            <Route path='/christmas' component={ChristmasContainer} />
            <Route path='/auth' component={SocialAuth} />

            <Route component={CommunicateContainer} />
          </Switch>
        </BrowserRouter>
        <LoadingContainer />
      </div>
    );
  }
}

export default App;
