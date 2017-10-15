import CategoryApi from '../api/categoryApi';
import * as types from './actionTypes';

export const getAllCategoriesSuccess = (categories) => {
  return { type: types.GET_ALL_CATEGORIES_SUCCESS, categories };
};

export const getAllCategories = () => (
  dispatch => (
    CategoryApi.getAllCategories().then(categories => 
      dispatch(getAllCategoriesSuccess(categories))
    ).catch(error => {
      throw(error);
    })
  )
);