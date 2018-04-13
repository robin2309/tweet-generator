import axios from 'axios';

import nameHelpers from 'Actions/nameHelpers';
import { API_URL } from 'Configs';

const actionPending = actionName => ({
  type: nameHelpers.pendingType(actionName),
  payload: {}
});

const actionRejected = (actionName, error) => ({
  type: nameHelpers.rejectedType(actionName),
  payload: {
    error
  }
});

const actionFulfilled = (actionName, items) => ({
  type: nameHelpers.fulfilledType(actionName),
  payload: {
    items
  }
});

export default (actionName, url, method, params) => dispatch => {
  dispatch(actionPending(actionName));

  return axios({
    url: `${API_URL}/${url}`,
    method,
    headers: {
      Identity: 'StoresSuperSercret'
    }
  }).then(
    response => dispatch(actionFulfilled(actionName, response.data)),
    error => {
      dispatch(actionRejected(actionName, error));
      throw new Error(error);
    }
  );
};
