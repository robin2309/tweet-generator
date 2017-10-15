import React, { Component } from 'react';
import Header from 'Components/Header/Header';
import Routes from 'Containers/Routes/Routes';
import Main from 'Containers/Main/Main';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

  	render() {
    	return (
      		<div>
        		<Header />
        		<Main>
        			<Routes />
        		</Main>
      		</div>
    	);
  	}
}