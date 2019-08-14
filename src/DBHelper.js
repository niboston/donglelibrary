const api = "https://librarysearchservice.search.windows.net/indexes/booksindex/docs?api-version=2019-05-06";

let API_KEY = "B886F1DAC41FB38BA0126061A30AE32A"; // Temp API key

const headers = {
  'content-type': 'application/json',
  'api-Key': API_KEY
};


export const search = (query) => {
  let final_query = '';
  if (query.text) {
    final_query += '&search=' + query.text;
  }

  if (query.categories && query.categories.length > 0) {
    final_query += "&$filter=Category/any(t: search.in(t, '" + query.categories + "'))";
  }

  return fetch(api + final_query, {
    method: 'GET',
    headers: headers,
  }).then(res => res.json())
    .then(data => data.value);
};