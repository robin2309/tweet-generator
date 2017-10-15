import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';

class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header className="header">
				<Link to="/home" className="header__link">Home</Link>
				<Link to="/page" className="header__link">Page</Link>
			</header>
		);
	}
};

export default Header;