import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';

import App from 'Components/App/App';
import reducers from 'Common/reducers';

const logger = ({ getState }) => {
  return next => action => {
    console.log('will dispatch', action);

    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action);

    console.log('state after dispatch', getState());

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  }
};


const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const store = createStore(
	reducers, 
	preloadedState,
	applyMiddleware(logger, promiseMiddleware)
);

const app = (
	<Provider store={store}>
		<Router>
	    	<App />
	    </Router>
    </Provider>
);

hydrate(
	app,
	document.getElementById('root')
);