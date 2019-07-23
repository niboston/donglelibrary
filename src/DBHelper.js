const api = process.env.PUBLIC_URL || '.';

let token = localStorage.token;

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  'Accept': 'application/json',
  'Authorization': token
};

export const getAll = () =>
  fetch(`${api}/books.json`, {headers})
    .then(res => res.json())
    .then(data => data.books);

export const search = (query) =>
  fetch(`${api}/books.json`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({query})
  }).then(res => res.json())
    .then(data => data.books);