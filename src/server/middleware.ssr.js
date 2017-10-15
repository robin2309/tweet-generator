import React from 'react';
import { StaticRouter} from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import App from 'Components/App/App';
import layout from 'Common/layout';

export const middlewareSsr = (req) => {
	return layout({
		body: renderToString(
			<StaticRouter location={req.url} context={{}}>
				<App />
			</StaticRouter>
		),
		title: 'App'
	});
}