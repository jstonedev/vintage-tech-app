import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route exact path="/about">
					<AboutPage />
				</Route>
				<Route exact path="/products">
					<ProductsPage />
				</Route>
				<Route exact path="/login">
					<LoginPage />
				</Route>
				<Route exact path="/cart">
					<CartPage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
