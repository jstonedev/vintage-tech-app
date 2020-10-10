import React, { Fragment } from "react";
import Hero from "../components/layout/Hero";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<Fragment>
			<Hero>
				<Link to="/products" className="btn btn-primary btn-hero">
					our products
				</Link>
			</Hero>
		</Fragment>
	);
};

export default HomePage;
