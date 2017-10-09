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
        body: post,
        headers: { 'Authorization': 'whatever-you-want' },
        method: 'POST'
      }
    )
    .then((res) => res.json())
    .then(({ posts }) => posts);

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
};