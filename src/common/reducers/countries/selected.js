import constants from 'Actions/constants';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SELECT_COUNTRY:
      return action.country;
    default:
      return state;
  }
};
