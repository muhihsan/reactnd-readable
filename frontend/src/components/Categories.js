import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import * as categoryActions from '../actions/categoryAction';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class Categories extends Component {
  componentDidMount = () =>
    this.props.actions.getAllCategories();

  goToCategoryPosts = (event, value) => {
    this.props.history.push(`/${value}`);
    this.props.onCategoryClick();
  }

  toUpperCase = (word) =>
    word.charAt(0).toUpperCase() + word.substr(1);

  render = () => {
    const {
      categories: {
        result: listCategories
      }
    } = this.props;

    return (
      <Menu
        onChange={this.goToCategoryPosts}
      >
        <MenuItem
          primaryText="Categories"
          disabled={true}
        />
        {listCategories && listCategories.length > 0 && (
          listCategories.map(name =>
            <MenuItem
              value={name}
              key={name}
            >
              {this.toUpperCase(name)}
            </MenuItem>
          )
      )}
      </Menu>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
      ...categoryActions
    },
    dispatch
  )
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Categories));