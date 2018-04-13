import requestThunk from 'Reducers/requestThunk';
import constants from './constants';

const actions = {
  select: country => ({ type: constants.SELECT_COUNTRY, country }),
  getAll: countries => requestThunk('GET_COUNTRIES', 'country', 'GET')
};

export default actions;
