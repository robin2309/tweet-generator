import constants from './constants';

const actions = {
	changePage: (pageName) => ({type: constants.CHANGE_PAGE, pageName}),
};

export default actions;