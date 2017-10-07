import PostApi from '../api/postApi';
import * as types from './actionTypes';

export const getAllPostsSuccess = (posts) => {
  return { type: types.GET_ALL_POSTS, posts };
};

export const getAllPosts = () => {
  return dispatch => {
    return PostApi.getAllPosts().then(posts => 
      dispatch(getAllPostsSuccess(posts))
    ).catch(error => {
      throw(error);
    });
  };
};