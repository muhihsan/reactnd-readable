import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import logo from '../icons/logo.svg';
import '../style/App.css';

const ConnectedSwitch = connect(state => ({
	location: state.location
}))(Switch);

class App extends Component {
  render() {
    return(
      <ConnectedSwitch>
        <Route exact path="/" component={(props) => (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        )} />
      </ConnectedSwitch>
    );
  }
}

export default App;
