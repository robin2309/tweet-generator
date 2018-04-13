import constants from 'Actions/constants';
import nameHelpers from 'Actions/nameHelpers';
import defaultState from '../defaultState';

const initialState = {
  ...defaultState
};

const handlers = {
  [constants.EMPTY_RETAILERS_LIST]: (state, action) => {
    return {
      ...defaultState
    };
  },
  [nameHelpers.pendingType(constants.GET_RETAILERS)]: (state, action) => {
    return {
      ...state,
      isPending: true,
      isFulfilled: false,
      isRejected: false
    };
  },
  [nameHelpers.rejectedType(constants.GET_RETAILERS)]: (state, action) => {
    const { error } = action.payload;
    return {
      isRejected: true,
      isPending: false,
      isFulfilled: false,
      error,
      items: []
    };
  },
  [nameHelpers.fulfilledType(constants.GET_RETAILERS)]: (state, action) => {
    const { items } = action.payload;
    const newItems = items.retailers.map(retailer => ({
      id: retailer.Id,
      name: retailer.Name
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
