export default class PostApi {
  static getAllPostsForCategory = (category) =>
    fetch(
      `http://localhost:3001/${category}/posts`,
      {
        headers: { 'Authorization': 'whatever-you-want' },
        method: 'GET'
      }
    )
    .then((res) => res.json())
    .then((posts) => posts);
  
  static getAllPosts = () =>
    fetch(
      `http://localhost:3001/posts`,
      {
        headers: { 'Authorization': 'whatever-you-want' },
        method: 'GET',
      }
    )
    .then((res) => res.json())
    .then((posts) => posts);
    
  static createNewPost = (post) =>
    fetch(
      `http://localhost:3001/posts`,
      {
        body: JSON.stringify(post),
        headers: {
          'Authorization': 'whatever-you-want',
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )
    .then((res) => res.json())
    .then((post) => post);

  static getPost = (id) =>
    fetch(
      `http://localhost:3001/posts/${id}`,
      {
        headers: { 'Authorization': 'whatever-you-want' },
        method: 'GET'
      }
    )
    .then((res) => res.json())
    .then((post) => post);

  static changePostVote = (id, voteOption) =>
    fetch(
      `http://localhost:3001/posts/${id}`,
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
    .then((res) => res.json())
    .then((post) => post);
    
  static editPost = (post) =>
    fetch(
      `http://localhost:3001/posts/${post.id}`,
      {
        body: JSON.stringify(post),
        headers: {
          'Authorization': 'whatever-you-want',
          'Content-Type': 'application/json'
        },
        method: 'PUT'
      }
    )
    .then((res) => res.json())
    .then((post) => post);

  static deletePost = (id) =>
    fetch(
      `http://localhost:3001/posts/${id}`,
      {
        headers: { 'Authorization': 'whatever-you-want' },
        method: 'DELETE'
      }
    )
    .then((res) => res.json())
    .then((post) => post);
};