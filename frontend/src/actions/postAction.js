import PostApi from '../api/postApi';
import * as types from './actionTypes';

export const getAllPostsSuccess = (posts) => {
  return { type: types.GET_ALL_POSTS, posts };
};

export const getPostSuccess = (post) => {
  return { type: types.GET_POST, post };
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

export const getAllPostsForCategory = (category) => {
  return dispatch => {
    return PostApi.getAllPostsForCategory(category).then(posts => 
      dispatch(getAllPostsSuccess(posts))
    ).catch(error => {
      throw(error);
    });
  };
};

export const getPost = (id) => {
  return dispatch => {
    return PostApi.getPost(id).then(post => 
      dispatch(getPostSuccess(post))
    ).catch(error => {
      throw(error);
    });
  };
};