import React from 'react';
import { Link } from "react-router-dom";

import logo from '../images/logo.jpeg';

class MenuBar extends React.Component {
	
	render() {
		return(
			<>
			<nav className="navbar navbar-expand flex-column">
				<div className="col navbar-brand text-center" href="#">
				  <img className="site-logo" src={logo} alt="" />
				</div>
				<div className="collapse navbar-collapse justify-content-center w-100 custom-navbar">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" to="/">Mission</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/whyorganic">Why Organic</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/products">Products</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/healthblogs">Health Blogs</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/contact">Connect To Us</Link>
						</li>
					</ul>
				</div>
			</nav>
			<nav className="navbar navbar-expand flex-column">
				<div className="collapse navbar-collapse justify-content-center w-100 second-header">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" to="/">Mission</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/">Why Organic</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/">Products</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/">Health Blogs</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/contact">Connect To Us</Link>
						</li>
					</ul>
				</div>
			</nav>
			</>
		);
	}
}

export default MenuBar;