import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { ReduxAsyncConnect, reducer as reduxAsyncConnect } from 'redux-connect';

import reducers from 'Common/reducers';
import routes from 'Common/routes';
import * as helpers from 'Reducers/helpers';
import './css/includeCss';
import { NODE_ENV } from 'Configs';

const logger = ({ getState }) => {
  return next => action => {
    console.log('will dispatch', action);
    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action);
    console.log('state after dispatch', getState());
    return returnValue;
  };
};

const middlewares = NODE_ENV === 'development'
  ? [ thunkMiddleware, logger ]
  : [ thunkMiddleware ];

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const store = createStore(
  combineReducers({
    reduxAsyncConnect,
    ...reducers
  }),
  preloadedState,
  applyMiddleware(...middlewares)
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <ReduxAsyncConnect routes={routes} helpers={helpers} />
    </BrowserRouter>
  </Provider>
);

hydrate(app, document.getElementById('root'));
