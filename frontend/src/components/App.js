import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Drawer from 'material-ui/Drawer';
import { LinearProgress } from 'material-ui/Progress';
import MenuIcon from 'material-ui-icons/Menu';
import Categories from './Categories';
import CategoryPosts from './CategoryPosts';
import CreatePost from './CreatePost';
import CreateComment from './CreateComment';
import EditComment from './EditComment';
import Home from './Home';
import PostDetails from './PostDetails';
import EditPost from './EditPost';
import '../style/index.css';

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch);

class App extends Component {
  state = {
    isDrawerOpen: false
  }

  goToHome = () => {
    this.props.history.push('/');
    this.closeDrawer();
  }

  closeDrawer = () =>
    this.setState({ isDrawerOpen: false });

  setDrawerState = (isDrawerOpen) =>
    this.setState({ isDrawerOpen });

  toggleDrawer = () =>
    this.setState({ isDrawerOpen: !this.state.isDrawerOpen });

  render = () => {
    const { isDrawerOpen } = this.state;
    const { classes } = this.props;

    const appBar = (
      <AppBar
        position="static"
      >
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="contrast"
            aria-label="Menu"
            onClick={this.toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            <span
              className="pointer"
              title="Readable Home"
              onClick={this.goToHome}
            >
              Readable
            </span>
          </Typography>
        </Toolbar>
      </AppBar>
    );

    return (
      <div>
        {appBar}
        <LinearProgress />
        <Drawer
          open={isDrawerOpen}
          onRequestClose={this.closeDrawer}
        >
          {appBar}
          <Categories
            onCategoryClick={this.closeDrawer}
          />
        </Drawer>
        <div
          className="container"
        >
          <ConnectedSwitch>
            <Route
              exact
              path="/"
              component={Home}
            />
            <Route
              exact
              path="/post/create"
              component={CreatePost}
            />
            <Route
              exact
              path="/:category"
              component={CategoryPosts}
            />
            <Route
              exact
              path="/:category/post/create"
              component={CreatePost}
            />
            <Route
              exact
              path="/:category/:id"
              component={PostDetails}
            />
            <Route
              exact
              path="/:category/:id/edit"
              component={EditPost}
            />
            <Route
              exact
              path="/:category/:id/comment/create"
              component={CreateComment}
            />
            <Route
              exact
              path="/:category/:id/:commentId/edit"
              component={EditComment}
            />
          </ConnectedSwitch>
        </div>
      </div>
    );
  }
}

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginRight: 20,
  }
});

export default withStyles(styles)(App);
