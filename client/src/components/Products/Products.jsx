import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
function Products({ setPageNum }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .post("/product", {
        search: "",
        minPrice: 0,
        maxPrice: 100,
        category: "",
        offset: 0,
      })
      .then((res) => {
        setProducts(res.data.rows);
        setPageNum(Math.floor(+res.data.rows[0].count / 6) + 1);
      })
      .catch(console.log);
  }, []);

  return (
    <section className="products-list">
      {products.length !== 0 ? (
        products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))
      ) : (
        <h1>No data</h1>
      )}
    </section>
  );
}

export default Products;
