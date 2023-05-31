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

export const getRecipeList = (sort = "asc", pivot = null) => {
  let queryString = "?sort=" + sort;
  if (pivot !== "") queryString += "&pivot=" + pivot;
  return new Promise((resolve, reject) => {
    fetch("http://127.0.0.1:8000/recipe/list/" + queryString)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.id_list);
        resolve(data.id_list);
      })
      .catch(() => {
        reject("fetchError");
      });
  });
};
