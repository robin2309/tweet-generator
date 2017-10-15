import express from 'express';
import {getConfigs} from 'Configs';
import {getLogger} from 'Utils/logger';
import {middlewareSsr} from './middleware.ssr';

const app = express();

global.__CONFIG__ = getConfigs();
global.__LOGGER__ = getLogger(__CONFIG__.logger.level);

app
.use('/build', express.static('build'))
.use('/static', express.static('static'))
.use((req, res) => {
	res.send(middlewareSsr(req));
});

app.listen(__CONFIG__.port);
__LOGGER__.info(`App listening on port ${__CONFIG__.port}`);