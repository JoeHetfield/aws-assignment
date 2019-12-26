import qs from 'qs';

let store;

const handleResponse = (response) => {
  if (response.ok) {
    return response
      .json()
      .then((result) => {
        if (result.code === 0) {
          return result.data;
        }
        if (!Number.isInteger(result.code)) {
          return result;
        }

        throw result;
      });
  }

  return response
    .json()
    .then((result) => {
      throw result;
    });
};

export const init = (localstore) => {
  store = localstore;
};

export const get = (url, query = {}) => fetch(url + qs.stringify(query, { addQueryPrefix: true }), {
  credentials: 'include',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
  .then(handleResponse);

export const post = (url, params = {}) => fetch(url, {
  method: 'POST',
  body: JSON.stringify(params),
  credentials: 'include',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
  .then(handleResponse);

export const put = (url, params = {}) => fetch(url, {
  method: 'PUT',
  body: JSON.stringify(params),
  credentials: 'include',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
  .then(handleResponse);

export const del = (url, query = {}) => fetch(url + qs.stringify(query, { addQueryPrefix: true }), {
  method: 'DELETE',
  credentials: 'include',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
  .then(handleResponse);

export const upload = (url, file, params = {}) => {
  const formData = new FormData();

  formData.append('file', file);

  Object.keys(params).map((item) => formData.append(item, params[item]));

  const headers = new Headers({
    Accept: 'application/json, */*',
  });

  return fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers,
    body: formData,
  }).then(handleResponse);
};
