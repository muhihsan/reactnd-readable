import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import Home from './Home';
import CategoryPosts from './CategoryPosts';
import Post from './Post';
import '../style/App.css';

const ConnectedSwitch = connect(state => ({
	location: state.location
}))(Switch);

class App extends Component {
  render = () => {
    return(
      <ConnectedSwitch>
        <Route exact path="/" component={Home} />
        <Route path="/:category" component={CategoryPosts} />
        <Route path="/:category/:id" component={Post} />
      </ConnectedSwitch>
    );
  }
}

export default App;
