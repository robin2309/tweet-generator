import React from 'react';
import { asyncConnect } from 'redux-connect';

import countriesActions from 'Actions/countries';
import retailersActions from 'Actions/retailers';

const Home = props => {
  return <div />;
};

export default asyncConnect([
  {
    promise: ({ store: { dispatch, getState }, match, helpers }) => {
      return Promise.resolve('async connect');
    }
  }
])(Home);
