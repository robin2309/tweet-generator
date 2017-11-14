import {combineReducers} from 'redux';

import initialState from './initialState';
import constants from 'Actions/constants';

function pageName(state = 'default', action) {
	switch (action.type) {
		case constants.CHANGE_PAGE: 
			return action.pageName;
		default: 
			return state;
	}
}

const myApp = combineReducers({
	pageName
});

export default myApp;