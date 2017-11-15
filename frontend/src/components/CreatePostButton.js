import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { Add } from 'material-ui-icons';

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
      <Button
        fab
        style={style.button}
        title="Create post"
        onClick={onButtonClick}
        color="primary"
        aria-label="Create post"
      >
        <Add />
      </Button>
    )
  }
}

export default CreatePostButton;