
const BASE_URL_FIREBASE = "https://nasa-599d3-default-rtdb.europe-west1.firebasedatabase.app";

const fetchData = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL_FIREBASE}/${path}.json`, options);
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};


export const getData = (endpoint, options) => fetchData(endpoint, options);
export const saveItem = (endpoint, item, options = {}) => {

  const finalOptions = {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    ...options,
  };
  return fetchData(endpoint, finalOptions);
};

export const deleteItem = (endpoint, id, options = {}) =>
  fetchData(`${endpoint}/${id}`, { method: "DELETE", ...options });