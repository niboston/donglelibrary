const api = "https://librarysearchservice.search.windows.net/indexes/booksindex/docs?api-version=2019-05-06";

let API_KEY = "B886F1DAC41FB38BA0126061A30AE32A"; // Temp API key

const headers = {
  'content-type': 'application/json',
  'api-Key': API_KEY
};

export const search_categories = (query) => {


  var category_array = Array.from(query.categories.values());

  let final_query = "&$filter=Category/any(t: t eq " +  "'" + category_array + "')";
  if (query.text != '')
  {
    final_query = '&search=' + query.text + final_query;
  }

  console.log(final_query);
  return fetch(api + final_query, {
    method: 'GET',
    headers: headers,
  }).then(res => res.json())
    .then(data => data.value);
};

/*
export const search = (query) => {
  var category_array = Array.from(query.categories.values());

  return fetch(api + "&search=" + query.text, {
    method: 'GET',
    headers: headers,
  }).then(res => res.json())
    .then(data => data.value);
};
*/

export const search = (query) => {
  let category_array = Array.from(query.categories.values());
  let final_query = '';
  if (query.text != '')
  {
    final_query += '&search=' + query.text;
  }

  if (category_array != '')
  {
    let category = category_array[category_array.length-1];
    final_query += "&$filter=Category/any(t: t eq " +  "'" + category + "')";
  }

  console.log(final_query);
  return fetch(api + final_query, {
    method: 'GET',
    headers: headers,
  }).then(res => res.json())
    .then(data => data.value);
};