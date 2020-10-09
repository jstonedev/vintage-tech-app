import React from "react";
import logo from "../../assets/img/logo.svg";
import NavLinks from "./NavLinks";

const Header = () => {
	return (
		<header className="header">
			<img src={logo} alt="vintage tech logo" className="logo" />
			<nav>
				<NavLinks />
			</nav>
		</header>
	);
};

export default Header;
