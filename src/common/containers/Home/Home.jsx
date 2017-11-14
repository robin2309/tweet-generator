import React, { Component } from 'react';
import {connect} from 'react-redux';

import actions from 'Actions';
import Test from 'Components/Test/Test';

class Home extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.dispatch(actions.changePage('home'));
	}
	
  	render() {
  		console.log('render');
  		console.log(this.props);
	    return (
	      	<div>
	        	<Test pageName={this.props.pageName} />
	      	</div>
    	);
  	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		pageName: state.pageName
	};
}

export default connect(mapStateToProps)(Home)
