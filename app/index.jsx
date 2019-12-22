/* eslint-disable no-console */
import '@babel/polyfill';
import React from 'react';
import moment from 'moment';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'reducers';

import { network, history } from 'utils';

import Main from 'pages';

moment.locale('zh-CN');
moment.defaultFormat = 'YYYY/MM/DD HH:mm:ss';

let store;

if (process.env.NODE_ENV === 'production') {
  store = createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware,
    ),
  );
} else {
  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(
      thunkMiddleware,
    )),
  );
}

network.init(store);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      console.log('SW registered: ', registration);
    }).catch((registrationError) => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  </Provider>
);

if (!global.Intl) {
  require.ensure([
    'intl',
    'intl/locale-data/jsonp/en.js',
  ], (require) => {
    require('intl');
    require('intl/locale-data/jsonp/en.js');
    render(<App />, document.getElementById('app'));
  });
} else {
  render(<App />, document.getElementById('app'));
}
