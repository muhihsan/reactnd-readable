import CommentApi from '../api/commentApi';
import * as types from './actionTypes';

export const getAllCommentsForPostSuccess = (comments) => (
  { type: types.GET_ALL_COMMENTS_FOR_POST_SUCCESS, comments }
)

export const getAllCommentsForPost = (id) => (
  dispatch => (
    CommentApi.GetAllCommentsForPost(id).then(comments =>
      dispatch(getAllCommentsForPostSuccess(comments))
    ).catch(error => {
      throw(error);
    })
  )
);