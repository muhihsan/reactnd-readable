export default class postApi {
  static getAllPostsForCategory = (category) => {
    return fetch(
      `http://localhost:3001/${category}/posts`,
      {
        headers: { 'Authorization': 'whatever-you-want' },
        method: 'GET'
      }
    )
    .then((res) => res.json())
    .then((posts) => posts);
  }
  
  static getAllPosts = () => {
    return fetch(
      `http://localhost:3001/posts`,
      {
        headers: { 'Authorization': 'whatever-you-want' },
        method: 'GET',
      }
    )
    .then((res) => res.json())
    .then((posts) => posts);
  }

  static getPost = (id) => {
    return fetch(
      `http://localhost:3001/posts/${id}`,
      {
        headers: { 'Authorization': 'whatever-you-want' },
        method: 'GET'
      }
    )
    .then((res) => res.json())
    .then((post) => post);
  }
 
  static createNewPost = (post) => {
    return fetch(
      `http://localhost:3001/post`,
      {
        body: post,
        headers: { 'Authorization': 'whatever-you-want' },
        method: 'POST'
      }
    )
    .then((res) => res.json())
    .then(({ posts }) => posts);
  }
};