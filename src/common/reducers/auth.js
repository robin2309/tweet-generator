import constants from 'Actions/constants';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_AUTH:
      return action.auth;
    default:
      return state;
  }
};
