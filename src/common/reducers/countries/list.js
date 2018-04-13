import constants from 'Actions/constants';
import nameHelpers from 'Actions/nameHelpers';
import defaultState from '../defaultState';

const initialState = {
  ...defaultState
};

const handlers = {
  [nameHelpers.pendingType(constants.GET_COUNTRIES)]: (state, action) => {
    return {
      ...state,
      isPending: true,
      isFulfilled: false,
      isRejected: false
    };
  },
  [nameHelpers.rejectedType(constants.GET_COUNTRIES)]: (state, action) => {
    const { error } = action.payload;
    return {
      isRejected: true,
      isPending: false,
      isFulfilled: false,
      error,
      items: []
    };
  },
  [nameHelpers.fulfilledType(constants.GET_COUNTRIES)]: (state, action) => {
    const { items } = action.payload;
    const newItems = items.countries.map(country => ({
      label: country.Name,
      value: country.Acronym
    }));
    return {
      isRejected: false,
      isPending: false,
      isFulfilled: true,
      error: null,
      items: newItems
    };
  }
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (handler) {
    return handler(state, action);
  }
  return state;
};
