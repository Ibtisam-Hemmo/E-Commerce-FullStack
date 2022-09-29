import React from "react";
import ProductCard from "./ProductCard";

function ProductsList({ products, user_id }) {
  return (
    <section className="products-list">
      {products.length !== 0 ? (
        products.map((product) => (
          <ProductCard product={product} key={product.id} user_id={user_id}/>
        ))
      ) : (
        <h1>No data</h1>
      )}
    </section>
  );
}

export default ProductsList;
