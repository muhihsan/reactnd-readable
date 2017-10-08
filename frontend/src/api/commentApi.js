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
}