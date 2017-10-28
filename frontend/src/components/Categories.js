import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as categoryActions from '../actions/categoryAction';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class Categories extends Component {
  componentDidMount = () => {
    this.props.actions.getAllCategories();
  }

  render = () => {
    const {
      categories: {
        entities: categories,
        result: listCategories
      },
      onCategoryClick
    } = this.props;

    return (
      <div>
        {listCategories && listCategories.length > 0 && (
          <Menu>
            {listCategories.map(name =>
              <MenuItem key={name}>
                <Link onClick={onCategoryClick} to={`/${name}/`}>{categories[name].name}</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Categories);