import React, { useContext } from "react";
import { ProductsContex } from "../../context/products";

const Products = () => {
	const { loading, products } = useContext(ProductsContex);
	return (
		<div>
			<h1>Products</h1>
		</div>
	);
};

export default Products;
