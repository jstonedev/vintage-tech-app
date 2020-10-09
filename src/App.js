import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/layout/Header";

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route path="/about">
					<AboutPage />
				</Route>
				<Route path="/products">
					<ProductsPage />
				</Route>
				<Route path="/login">
					<LoginPage />
				</Route>
				<Route path="/cart">
					<CartPage />
				</Route>
				<Route path="*">
					<ErrorPage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
