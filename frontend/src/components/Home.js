import React, { Component } from 'react';
import Categories from './Categories';
import Posts from './Posts';
import CreatePost from './CreatePost';

class Home extends Component {
  render = () => {
    return(
      <div>
        <Categories />
        <Posts />
        <CreatePost />
      </div>
    );
  };
}

export default Home;