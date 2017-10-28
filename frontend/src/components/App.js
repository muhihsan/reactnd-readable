import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import CategoryPosts from './CategoryPosts';
import CreatePost from './CreatePost';
import Home from './Home';
import Post from './Post';

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch);

class App extends Component {
  render = () => {
    return (
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <ConnectedSwitch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post/create" component={CreatePost} />
          <Route exact path="/:category" component={CategoryPosts} />
          <Route exact path="/:category/:id" component={Post} />
        </ConnectedSwitch>
      </div>
    );
  }
}

export default App;
