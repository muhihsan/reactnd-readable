export default class Category {
  static getAllCategories = () => {
    return fetch(
      `http://localhost:3001/categories`,
      {
        method: 'GET',
        headers: { 'Authorization': 'whatever-you-want' }
      }
    )
    .then((res) => res.json())
    .then(({ categories }) => categories);
  }
};