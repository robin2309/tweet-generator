import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from 'Common/components/App';
import template from 'Common/template';

const server = express();

server.use('/build', express.static('build'));

server.get('/', (req, res) => {
  res.send(template({
    body: renderToString(<App />),
    title: 'Hello World from the server'
  }));
});

server.listen(4444);