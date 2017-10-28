import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Categories from './Categories';
import Posts from './Posts';
import CreatePost from './CreatePost';

class Home extends Component {
  state = {
    isCreatingPost: false
  }

  showCreatePostDialog = () => {
    this.setState({ isCreatingPost: true });
  }

  render = () => {
    const { isCreatingPost } = this.state;
    const style = {
      margin: 0,
      top: 'auto',
      right: 24,
      bottom: 24,
      left: 'auto',
      position: 'fixed',
    };

    return(
      <div>
        <Categories />
        <Posts />
        {isCreatingPost && (<CreatePost />)}
        <FloatingActionButton style={style} title="Create post" onClick={this.showCreatePostDialog}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}

export default Home;