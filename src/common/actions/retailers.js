import requestThunk from 'Reducers/requestThunk';
import constants from './constants';

const actions = {
  select: retailer => ({ type: constants.SELECT_RETAILER, retailer }),
  getFromCountry: country =>
    requestThunk(constants.GET_RETAILERS, `retailers/${country}`, 'GET'),
  emptyRetailersList: () => ({type: constants.EMPTY_RETAILERS_LIST})
};

export default actions;
