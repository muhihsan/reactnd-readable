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
    .then(({ posts }) => posts);
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
    .then(({ posts }) => posts);
  }
};