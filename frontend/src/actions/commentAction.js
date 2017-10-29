import CommentApi from '../api/commentApi';
import * as types from './actionTypes';

const getAllCommentsForPostSuccess = (comments) => (
  { type: types.GET_ALL_COMMENTS_FOR_POST_SUCCESS, comments }
);

const createCommentForPostSuccess = (comment) => (
  { type: types.CREATE_COMMENT_FOR_POST_SUCCESS, comment }
);

const editCommentForPostSuccess = (comment) => (
  { type: types.EDIT_COMMENT_FOR_POST_SUCCESS, comment }
);

const deleteCommentForPostSuccess = (comment) => (
  { type: types.DELETE_COMMENT_FOR_POST_SUCCESS, comment }
);

const changeCommentVoteForPostSuccess = (comment) => (
  { type: types.CHANGE_COMMENT_VOTE_FOR_POST_SUCCESS, comment }
);

const emptyCommentsForPostSuccess = () => (
  { type: types.EMPTY_COMMENTS_FOR_POST_SUCCESS }
);

export const getAllCommentsForPost = (id) =>
  dispatch =>
    CommentApi.getAllCommentsForPost(id).then(comments =>
      dispatch(getAllCommentsForPostSuccess(comments))
    ).catch(error => {
      throw (error);
    });

export const createCommentForPost = (comment) =>
  dispatch =>
    CommentApi.createCommentForPost(comment).then(comment =>
      dispatch(createCommentForPostSuccess(comment))
    ).catch(error => {
      throw (error)
    });

export const editCommentForPost = (comment) =>
  dispatch =>
    CommentApi.editCommentForPost(comment).then(comment =>
      dispatch(editCommentForPostSuccess(comment))
    ).catch(error => {
      throw (error)
    });

export const deleteCommentForPost = (id) =>
  dispatch =>
    CommentApi.deleteCommentForPost(id).then(comment =>
      dispatch(deleteCommentForPostSuccess(comment))
    ).catch(error => {
      throw (error)
    });

export const upVoteCommentForPost = (id) => changeCommentVoteForPost(id, 'upVote');

export const downVoteCommentForPost = (id) => changeCommentVoteForPost(id, 'downVote');

const changeCommentVoteForPost = (id, vote) =>
  dispatch =>
    CommentApi.changeCommentVoteforPost(id, vote).then(comment =>
      dispatch(changeCommentVoteForPostSuccess(comment))
    ).catch(error => {
      throw (error)
    });

export const emptyCommentsForPost = () =>
  dispatch => dispatch(emptyCommentsForPostSuccess());