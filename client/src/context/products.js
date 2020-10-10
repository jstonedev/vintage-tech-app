import React, { useState } from "react";

export const ProductsContex = React.createContext();

export const ProductsProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [products, setProducts] = useState([]);
	const [featured, setFeatured] = useState([]);

	return (
		<ProductsContex.Provider value={{ loading, products, featured }}>
			{children}
		</ProductsContex.Provider>
	);
};
