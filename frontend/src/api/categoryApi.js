export default class Category {
  static getAllCategories = () => {
    return fetch(
      `http://localhost:3001/categories`,
      {
        headers: { 'Authorization': 'whatever-you-want' },
        method: 'GET'
      }
    )
    .then((res) => res.json())
    .then(({ categories }) => categories);
  }
};