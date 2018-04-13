import React from 'react';
import url from 'url';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {
  ReduxAsyncConnect,
  loadOnServer,
  reducer as reduxAsyncConnect
} from 'redux-connect';
import thunkMiddleware from 'redux-thunk';

import logger from 'Utils/logger.js';
import layout from 'Layouts/main';
import reducers from 'Common/reducers';
import routes from 'Common/routes';
import * as helpers from 'Reducers/helpers';

export const middlewareSsr = async(req) => {
  const store = createStore(
    combineReducers({
      reduxAsyncConnect,
      ...reducers
    }),
    {auth: req.session},
    applyMiddleware(thunkMiddleware)
  );
  const location = url.parse(req.url);

  return loadOnServer({ store, location, routes, helpers })
    .then(() => {
      return layout({
        body: renderToString(
          <Provider store={store} key='provider'>
            <StaticRouter location={req.url} context={{}}>
              <ReduxAsyncConnect routes={routes} helpers={helpers} />
            </StaticRouter>
          </Provider>
        ),
        preloadedState: store.getState(),
        title: 'App'
      });
    })
    .catch(error => {
      logger.error(error.message);
      console.log(error.stack);
    });
};
