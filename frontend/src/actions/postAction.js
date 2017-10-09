import PostApi from '../api/postApi';
import * as types from './actionTypes';

export const getAllPostsSuccess = (posts) => (
  { type: types.GET_ALL_POSTS, posts }
);

export const getPostSuccess = (post) => (
  { type: types.GET_POST, post }
);

export const createPostSuccess = (post) => (
  { type: types.CREATE_POST, post }
);

export const getAllPosts = () => (
  dispatch => (
    PostApi.getAllPosts().then(posts => 
      dispatch(getAllPostsSuccess(posts))
    ).catch(error => {
      throw(error);
    })
  )
);

export const getAllPostsForCategory = (category) => (
  dispatch => (
    PostApi.getAllPostsForCategory(category).then(posts => 
      dispatch(getAllPostsSuccess(posts))
    ).catch(error => {
      throw(error);
    })
  )
);

export const getPost = (id) => (
  dispatch => (
    PostApi.getPost(id).then(post => 
      dispatch(getPostSuccess(post))
    ).catch(error => {
      throw(error);
    })
  )
);

export const createPost = (post) => (
  dispatch => (
    PostApi.createNewPost(post =>
      dispatch(createPostSuccess(post))
    ).catch(error => {
      throw(error)
    })
  )
);