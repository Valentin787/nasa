const BASE_URL = "https://api.spacexdata.com/v4";


// const API_ENDPOINT = 'contacts';

// const fetchData = async (path, options = {}) => {
//   const res = await fetch(`${BASE_URL}/${path}`, options);
//   return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
// };
const fetchData = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}/${path}`, options);
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

export const getItems = (
  endpoint
  // token
) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      // Authorization: `Bearer ${token}`,
    },
  };
  return fetchData(endpoint, options);
};




