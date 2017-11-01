import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Categories from './Categories';
import CategoryPosts from './CategoryPosts';
import CreatePost from './CreatePost';
import CreateComment from './CreateComment';
import EditComment from './EditComment';
import Home from './Home';
import PostDetails from './PostDetails';
import EditPost from './EditPost';

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch);

class App extends Component {
  state = {
    isDrawerOpen: false
  }

  goToHome = () => {
    this.props.history.push('/');
  }

  toggleDrawer = () =>
    this.setState({ isDrawerOpen: !this.state.isDrawerOpen });

  closeDrawer = () =>
    this.setState({ isDrawerOpen: false });

  onRequestChange = (isDrawerOpen) =>
    this.setState({ isDrawerOpen });

  render = () => {
    const { isDrawerOpen } = this.state;

    const styles = {
      title: {
        cursor: 'pointer',
      },
    };

    return (
      <div>
        <AppBar
          title={<span style={styles.title}>Readable</span>}
          onTitleTouchTap={this.goToHome}
          onLeftIconButtonTouchTap={this.toggleDrawer}
        />
        <Drawer
          docked={false}
          open={isDrawerOpen}
          onRequestChange={this.onRequestChange}
        >
          <Categories onCategoryClick={this.closeDrawer} />
        </Drawer>
        <div>
          <ConnectedSwitch>
            <Route exact path="/" component={Home} />
            <Route exact path="/post/create" component={CreatePost} />
            <Route exact path="/:category" component={CategoryPosts} />
            <Route exact path="/:category/post/create" component={CreatePost} />
            <Route exact path="/:category/:id" component={PostDetails} />
            <Route exact path="/:category/:id/edit" component={EditPost} />
            <Route exact path="/:category/:id/comment/create" component={CreateComment} />
            <Route exact path="/:category/:id/:commentId/edit" component={EditComment} />
          </ConnectedSwitch>
        </div>
      </div>
    );
  }
}

export default App;
