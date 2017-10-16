import CommentApi from '../api/commentApi';
import * as Types from './actionTypes';

export const getAllCommentsForPostSuccess = (comments) => (
  { type: Types.GET_ALL_COMMENTS_FOR_POST_SUCCESS, comments }
);

export const createCommentForPostSuccess = (comment) => (
  { type: Types.CREATE_COMMENT_FOR_POST_SUCCESS, comment }
);

export const editCommentForPostSuccess = (comment) => (
  { type: Types.EDIT_COMMENT_FOR_POST_SUCCESS, comment }
);

export const deleteCommentForPostSuccess = (comment) => (
  { type: Types.DELETE_COMMENT_FOR_POST_SUCCESS, comment }
);

export const changeCommentVoteForPostSuccess = (comment) => (
  { type: Types.CHANGE_COMMENT_VOTE_FOR_POST_SUCCESS, comment }
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

export const upVoteCommentForPost = (id) => changeCommentVoteForPost(id, 'upVote');

export const downVoteCommentForPost = (id) => changeCommentVoteForPost(id, 'downVote');

const changeCommentVoteForPost = (id, vote) =>
  dispatch =>
    CommentApi.changeCommentVoteforPost(id, vote).then(comment =>
      dispatch(changeCommentVoteForPostSuccess(comment))
    ).catch(error => {
      throw(error)
    });