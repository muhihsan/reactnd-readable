import CommentApi from '../api/commentApi';
import * as types from './actionTypes';
import { push } from 'react-router-redux'

const getAllCommentsForPostSuccess = (comments) => (
  { type: types.GET_ALL_COMMENTS_FOR_POST_SUCCESS, comments }
);

const getCommentSuccess = (comment) => (
  { type: types.GET_COMMENT_SUCCESS, comment }
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

const getTotalCommentsForPostSuccess = (id, comments) => (
  { type: types.GET_TOTAL_COMMENTS_FOR_POST_SUCCESS, id, comments }
);

export const getAllCommentsForPost = (id) =>
  dispatch =>
    CommentApi.getAllCommentsForPost(id).then(comments =>
      dispatch(getAllCommentsForPostSuccess(comments))
    ).catch(error => {
      throw (error);
    });

export const getComment = (id) =>
  dispatch =>
    CommentApi.getComment(id).then(comment =>
      dispatch(getCommentSuccess(comment))
    ).catch(error => {
      throw (error);
    });

export const getTotalCommentsForPosts = (ids) =>
    dispatch => {
      ids.forEach(id => {
        dispatch(getAllCommentsForPost(id)).then(comments => 
          dispatch(getTotalCommentsForPostSuccess(id, comments)))
      });
    };

export const createCommentForPost = (comment, category) =>
  dispatch =>
    CommentApi.createCommentForPost(comment).then(comment => {
      dispatch(createCommentForPostSuccess(comment));
      dispatch(push(`/${category}/${comment.parentId}`));
    }).catch(error => {
      throw (error)
    });

export const editCommentForPost = (comment, category) =>
  dispatch =>
    CommentApi.editCommentForPost(comment).then(comment => {
      dispatch(editCommentForPostSuccess(comment));
      dispatch(push(`/${category}/${comment.parentId}`));
    }).catch(error => {
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