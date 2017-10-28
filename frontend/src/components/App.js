import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Categories from './Categories';
import CategoryPosts from './CategoryPosts';
import CreatePost from './CreatePost';
import Home from './Home';
import Post from './Post';

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch);

class App extends Component {
  state = {
    isDrawerOpen: false
  }

  toggleDrawer = () =>
    this.setState({ isDrawerOpen: !this.state.isDrawerOpen });

  render = () => {
    const { isDrawerOpen } = this.state;

    return (
      <div>
        <AppBar
          title="Title"
          onLeftIconButtonTouchTap={this.toggleDrawer}
        />
        <Drawer
          docked={false}
          open={isDrawerOpen}
          onRequestChange={(open) => this.setState({ isDrawerOpen: open })}
        >
          <Categories />
        </Drawer>
        <div>
          <ConnectedSwitch>
            <Route exact path="/" component={Home} />
            <Route exact path="/post/create" component={CreatePost} />
            <Route exact path="/:category" component={CategoryPosts} />
            <Route exact path="/:category/:id" component={Post} />
          </ConnectedSwitch>
        </div>
      </div>
    );
  }
}

export default App;
