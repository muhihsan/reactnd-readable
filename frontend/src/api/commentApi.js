export default class CommentApi {
  static getAllCommentsForPost = (id) =>
    fetch(
      `http://localhost:3001/posts/${id}/comments`,
      {
        headers: { 'Authorization': 'whatever-you-want' },
        method: 'GET'
      }
    )
    .then(res => res.json())
    .then(comments => comments);

  static getComment = (id) =>
    fetch(
      `http://localhost:3001/comments/${id}`,
      {
        headers: { 'Authorization': 'whatever-you-want' },
        method: 'GET'
      }
    )
    .then(res => res.json())
    .then(comment => comment);

  static changeCommentVoteforPost = (id, voteOption) =>
    fetch(
      `http://localhost:3001/comments/${id}`,
      {
        body: JSON.stringify({
          option: voteOption
        }),
        headers: {
          'Authorization': 'whatever-you-want',
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )
    .then(res => res.json())
    .then(comment => comment);

  static createCommentForPost = (comment) =>
    fetch(
      `http://localhost:3001/comments`,
      {
        body: JSON.stringify(comment),
        headers: {
          'Authorization': 'whatever-you-want',
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )
    .then(res => res.json())
    .then(comment => comment);

  static editCommentForPost = (comment) =>
    fetch(
      `http://localhost:3001/comments/${comment.id}`,
      {
        body: JSON.stringify(comment),
        headers: {
          'Authorization': 'whatever-you-want',
          'Content-Type': 'application/json'
        },
        method: 'PUT'
      }
    )
    .then(res => res.json())
    .then(comment => comment);

  static deleteCommentForPost = (id) =>
    fetch(
      `http://localhost:3001/comments/${id}`,
      {
        headers: { 'Authorization': 'whatever-you-want' },
        method: 'DELETE'
      }
    )
    .then(res => res.json())
    .then(comment => comment);
}