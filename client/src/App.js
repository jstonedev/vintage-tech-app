import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./components/products/Products";
import LoginPage from "./components/auth/Login";
import CartPage from "./components/cart/Cart";
import Error from "./components/Error";
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
					<Error />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
