import constants from 'Actions/constants';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SELECT_RETAILER:
      return action.retailer;
    default:
      return state;
  }
};
