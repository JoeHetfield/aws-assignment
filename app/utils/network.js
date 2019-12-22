import qs from 'qs';

import { Session } from 'actions';

let store;

const handleResponse = (response) => {
  if (response.status === 401) {
    store.dispatch(Session.signout());
    return null;
  }

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

const getToken = (state) => {
  const temporary = state.getIn(['session', 'signInVerificationInfo', 'accessToken']);
  const token = state.getIn(['session', 'token']);

  return temporary || token;
};

export const init = (localstore) => {
  store = localstore;
};

export const get = (url, query = {}) => fetch(url + qs.stringify(query, { addQueryPrefix: true }), {
  credentials: 'include',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Authorization': getToken(store.getState()),
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
    'X-Authorization': getToken(store.getState()),
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
    'X-Authorization': getToken(store.getState()),
  },
})
  .then(handleResponse);

export const del = (url, query = {}) => fetch(url + qs.stringify(query, { addQueryPrefix: true }), {
  method: 'DELETE',
  credentials: 'include',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Authorization': getToken(store.getState()),
  },
})
  .then(handleResponse);

export const upload = (url, file, params = {}) => {
  const formData = new FormData();

  formData.append('file', file);

  Object.keys(params).map(item => formData.append(item, params[item]));

  const headers = new Headers({
    Accept: 'application/json, */*',
    'X-Authorization': getToken(store.getState()),
  });

  return fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers,
    body: formData,
  }).then(handleResponse);
};
