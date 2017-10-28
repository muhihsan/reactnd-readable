import PostApi from '../api/postApi';
import * as types from './actionTypes';
import { push } from 'react-router-redux'

export const getAllPostsSuccess = (posts) => (
  { type: types.GET_ALL_POSTS_SUCCESS, posts }
);

export const getPostSuccess = (post) => (
  { type: types.GET_POST_SUCCESS, post }
);

export const createPostSuccess = (post) => (
  { type: types.CREATE_POST_SUCCESS, post }
);

export const editPostSuccess = (post) => (
  { type: types.EDIT_POST_SUCCESS, post }
);

export const deletePostSuccess = (post) => (
  { type: types.DELETE_POST_SUCCESS, post }
);

export const changePostVoteSuccess = (post) => (
  { type: types.CHANGE_POST_VOTE_SUCCESS, post }
);

export const emptyPostSuccess = () => (
  { type: types.EMPTY_POST_SUCCESS }
);

export const getAllPosts = () =>
  dispatch =>
    PostApi.getAllPosts().then(posts =>
      dispatch(getAllPostsSuccess(posts))
    ).catch(error => {
      throw (error);
    });

export const getAllPostsForCategory = (category) =>
  dispatch =>
    PostApi.getAllPostsForCategory(category).then(posts =>
      dispatch(getAllPostsSuccess(posts))
    ).catch(error => {
      throw (error);
    });

export const getPost = (id) =>
  dispatch =>
    PostApi.getPost(id).then(post =>
      dispatch(getPostSuccess(post))
    ).catch(error => {
      throw (error);
    });

export const createPost = (post) =>
  dispatch =>
    PostApi.createNewPost(post).then(post => {
      dispatch(createPostSuccess(post));
      dispatch(push(`${post.category}/${post.id}`));
    }).catch(error => {
      throw (error)
    });

export const updatePost = (post) =>
  dispatch =>
    PostApi.editPost(post).then(post =>
      dispatch(editPostSuccess(post))
    ).catch(error => {
      throw (error)
    });

export const deletePost = (id) =>
  dispatch =>
    PostApi.deletePost(id).then(post => {
      dispatch(deletePostSuccess(post));
      dispatch(push(''));
    }).catch(error => {
      throw (error)
    });

export const upVotePost = (id) => changePostVote(id, 'upVote');

export const downVotePost = (id) => changePostVote(id, 'downVote');

const changePostVote = (id, vote) =>
  dispatch =>
    PostApi.changePostVote(id, vote).then(post =>
      dispatch(changePostVoteSuccess(post))
    ).catch(error => {
      throw (error);
    });

export const emptyPost = () =>
  dispatch => dispatch(emptyPostSuccess());