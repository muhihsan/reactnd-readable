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

    return(
      <div>
        <Categories />
        <Posts />
        {isCreatingPost && (<CreatePost />)}
        <FloatingActionButton title="Create post" onClick={this.showCreatePostDialog}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}

export default Home;