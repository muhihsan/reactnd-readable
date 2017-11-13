import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import * as categoryActions from '../actions/categoryAction';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class Categories extends Component {
  componentDidMount = () => {
    this.props.actions.getAllCategories();
  }

  toUpperCase = (word) => {
    return word.charAt(0).toUpperCase() + word.substr(1);
  }

  goToCategoryPosts = (event, value) => {
    this.props.history.push(`/${value}`);
    this.props.onCategoryClick();
  }

  render = () => {
    const {
      categories: {
        result: listCategories
      }
    } = this.props;

    return (
      <div>
        {listCategories && listCategories.length > 0 && (
          <Menu
            onChange={this.goToCategoryPosts}>
            <MenuItem primaryText="Categories" disabled={true} />
            {listCategories.map(name =>
              <MenuItem
                value={name}
                key={name}>
                {this.toUpperCase(name)}
              </MenuItem>
            )}
          </Menu>
        )}
        {(!listCategories || listCategories === 0) && (
          <div>List of posts for category will be here</div>
        )}
      </div>
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