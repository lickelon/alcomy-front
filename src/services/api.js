export const getRecipeNameById = (id) => {
  return new Promise((resolve, reject) => {
    fetch("http://127.0.0.1:8000/recipe/" + id)
      .then((response) => response.json())
      .then((data) => {
        resolve(data.name);
      })
      .catch(() => {
        reject("fetchError");
      });
  });
};

export const getRecipeList = (sort = "name", order = "asc") => {
  let queryString = "?sort=" + sort;
  if (order !== "") queryString += "&order=" + order;
  return new Promise((resolve, reject) => {
    fetch("http://127.0.0.1:8000/recipe/list/" + queryString)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        resolve(data);
      })
      .catch(() => {
        reject("fetchError");
      });
  });
};
