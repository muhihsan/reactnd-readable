import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import Home from './Home';
import '../style/App.css';

const ConnectedSwitch = connect(state => ({
	location: state.location
}))(Switch);

class App extends Component {
  render() {
    return(
      <ConnectedSwitch>
        <Route exact path="/" component={(props) => ( <Home /> )} />
      </ConnectedSwitch>
    );
  }
}

export default App;
