import { combineReducers } from 'redux';

import selectedCountry from './countries/selected';
import countriesList from './countries/list';
import selectedRetailer from './retailers/selected';
import retailersList from './retailers/list';
import auth from './auth';

const myApp = {
  countries: combineReducers({
    selected: selectedCountry,
    list: countriesList
  }),
  retailers: combineReducers({
    selected: selectedRetailer,
    list: retailersList
  }),
  auth
};

export default myApp;
