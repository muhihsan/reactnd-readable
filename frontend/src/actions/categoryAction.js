import CategoryApi from '../api/categoryApi';
import * as Types from './actionTypes';

export const getAllCategoriesSuccess = (categories) => {
  return { type: Types.GET_ALL_CATEGORIES_SUCCESS, categories };
};

export const getAllCategories = () =>
  dispatch =>
    CategoryApi.getAllCategories().then(categories => 
      dispatch(getAllCategoriesSuccess(categories))
    ).catch(error => {
      throw(error);
    });