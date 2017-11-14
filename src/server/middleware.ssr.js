import React from 'react';
import { StaticRouter} from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';

import App from 'Components/App/App';
import layout from 'Common/layout';
import reducers from 'Common/reducers';

export const middlewareSsr = (req) => {
	const store = createStore(reducers);
	return layout({
		body: renderToString(
			<Provider store={store}>
				<StaticRouter location={req.url} context={{}}>
					<App />
				</StaticRouter>
			</Provider>
		),
		preloadedState: store.getState(),
		title: 'App'
	});
}