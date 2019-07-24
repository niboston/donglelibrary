const api = "https://librarysearchservice.search.windows.net/indexes/booksindex/docs?api-version=2019-05-06&search=";

let API_KEY = "B886F1DAC41FB38BA0126061A30AE32A"; // Temp API key

const headers = {
  'content-type': 'application/json',
  'api-Key': API_KEY
};


export const search = (query) => {
  return fetch(api + query.text, {
    method: 'GET',
    headers: headers,
  }).then(res => res.json())
    .then(data => data.value);
};