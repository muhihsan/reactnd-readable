import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Categories from './Categories';
import Posts from './Posts';

class Home extends Component {
  goToCreatePost = () => {
    this.props.history.push('/post/create');
  }

  render = () => {
    const style = {
      margin: 0,
      top: 'auto',
      right: 24,
      bottom: 24,
      left: 'auto',
      position: 'fixed',
    };

    return (
      <div>
        <Categories />
        <Posts />
        <FloatingActionButton style={style} title="Create post" onClick={this.goToCreatePost}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}

export default Home;