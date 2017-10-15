import CommentApi from '../api/commentApi';
import * as types from './actionTypes';

export const getAllCommentsForPostSuccess = (comments) => (
  { type: types.GET_ALL_COMMENTS_FOR_POST_SUCCESS, comments }
);

export const createCommentForPostSuccess = (comment) => (
  { type: types.CREATE_COMMENT_FOR_POST_SUCCESS, comment }
);

export const editCommentForPostSuccess = (comment) => (
  { type: types.EDIT_COMMENT_FOR_POST_SUCCESS, comment }
);

export const deleteCommentForPostSuccess = (comment) => (
  { type: types.DELETE_COMMENT_FOR_POST_SUCCESS, comment }
);

export const getAllCommentsForPost = (id) =>
  dispatch =>
    CommentApi.getAllCommentsForPost(id).then(comments =>
      dispatch(getAllCommentsForPostSuccess(comments))
    ).catch(error => {
      throw(error);
    });

export const createCommentForPost = (comment) =>
  dispatch =>
    CommentApi.createCommentForPost(comment).then(comment =>
      dispatch(createCommentForPostSuccess(comment))
    ).catch(error => {
      throw(error)
    });

export const editCommentForPost = (comment) =>
  dispatch =>
    CommentApi.editCommentForPost(comment).then(comment =>
      dispatch(editCommentForPostSuccess(comment))
    ).catch(error => {
      throw(error)
    });

export const deleteCommentForPost = (id) =>
  dispatch =>
    CommentApi.deleteCommentForPost(id).then(comment =>
      dispatch(deleteCommentForPostSuccess(comment))
    ).catch(error => {
      throw(error)
    });