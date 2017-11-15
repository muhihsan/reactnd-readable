import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  button: {
    margin: 0,
    top: 'auto',
    right: 24,
    bottom: 24,
    left: 'auto',
    position: 'fixed',
  }
};

class CreatePostButton extends Component {
  render = () => {
    const { onButtonClick } = this.props;

    return (
      <FloatingActionButton
        style={style.button}
        title="Create post"
        onClick={onButtonClick}
      >
        <ContentAdd />
      </FloatingActionButton>
    )
  }
}

export default CreatePostButton;