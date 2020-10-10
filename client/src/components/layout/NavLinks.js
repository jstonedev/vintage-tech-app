import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
	return (
		<Fragment>
			<ul>
				<div>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/products">Products</Link>
					</li>
				</div>
				<div>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/cart">Cart</Link>
					</li>
				</div>
			</ul>
		</Fragment>
	);
};

export default NavLinks;
