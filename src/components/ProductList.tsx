import React, { useEffect, useState } from "react";
//second argument to the useeffect hook is the dependecies array
//if you leave if empty then react only calls the render once but if you add params the react will rerender only when those params change
function ProductList() {
	const [product, setProduct] = useState<string[]>([]);

	useEffect(() => {
		console.log("fetching product");
		setProduct(["ade"]);
	}, []);
	return <div>ProductList</div>;
}

export default ProductList;
