//rfce
import React from 'react';
import { Link } from 'react-router-dom'; //링크를 눌러줘야 하니깐 링크를 가져올거다.

import './Navigation.css';

function Navigation() {
	return (
		<div className="nav">
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
		</div>
	)
}

export default Navigation