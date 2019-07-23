const api = "https://librarysearchservice.search.windows.net/indexes/mockdata/docs?api-version=2019-05-06&search=in";

let API_KEY = "B886F1DAC41FB38BA0126061A30AE32A"; // Temp API key

const headers = {
  'Accept': 'application/json',
  'api-key': API_KEY
};


export const search = (query) =>
  fetch(`${api}`, {
    method: 'GET',
    headers: headers,
  }).then(res => res.json())
    .then(data => data.values).catch(e => console.log(e));
