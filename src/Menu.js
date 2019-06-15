import React from 'react';
import logo from './images/logo.jpeg';

class MenuBar extends React.Component {
	
	render() {
		return(
			<nav className="site-header sticky-top py-1">
				<div className="col navbar-brand text-center" href="#">
				  <img className="site-logo" src={logo} alt="" />
				</div>
				<div className="container d-flex flex-column flex-md-row justify-content-between">
					<a className="py-2 d-none d-md-inline-block" href="#">Mission</a>
					<a className="py-2 d-none d-md-inline-block" href="#">Why Organic</a>
					<a className="py-2 d-none d-md-inline-block" href="#">Products</a>
					<a className="py-2 d-none d-md-inline-block" href="#">Health Blogs</a>
					<a className="py-2 d-none d-md-inline-block" href="#">Connect To Us</a>
				</div>
			</nav>
	);
	}
}

export default MenuBar;