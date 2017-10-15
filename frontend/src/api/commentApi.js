export default class CommentApi {
  static GetAllCommentsForPost = (id) => 
    fetch(
      `http://localhost:3001/posts/${id}/comments`,
      {
        headers: { 'Authorization': 'whatever-you-want' },
        method: 'GET'
      }
    )
    .then((res) => res.json())
    .then((comments) => comments);


  static CreateCommentForPost = (comment) => 
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
    .then((res) => res.json())
    .then((comment) => comment);
}