import React, { useState } from "react";
import axios from "axios";

function CartProduct({ product, cartProducts, setCartProducts }) {
  const { name, price, img, id, count } = product;

  // const { id, count } = product;
  const [newCount, setNewCount] = useState(count);

  const deleteSingleProduct = () => {
    axios.post("/api/v1/cart/delete-product", { id });
    const newCartProducts = cartProducts.filter((p) => p.id !== id);
    setCartProducts(newCartProducts);
  };

  const handleUpdateCount = () => {
    console.log("from handleUpdateCount on save");
    axios.post("/api/v1/cart/update-product", { newCount, id });
  };

  const handleDecrementCount = () => {
    newCount > 1 ? setNewCount(newCount - 1) : deleteSingleProduct();
  };

  return (
    // <div>
    // <button type="button" onClick={deleteSingleProduct}>
    //   delete
    // </button>
    // <button type="button" onClick={() => setNewCount(newCount + 1)}>
    //   +
    // </button>
    // <button type="button" onClick={handleDecrementCount}>
    //   -
    // </button>
    // <button type="button" onClick={handleUpdateCount}>
    //   save
    // </button>
    // <p>COUNT: {newCount}</p>
    // </div>

    <div className="product-card">
      <img src={img} alt="product" className="product-img" />
      <div className="product-card-info">
        <p className="product-title">{name}</p>
        <p className="product-price">{price.toFixed(2)}$</p>
        <div className="product-cards-btns">
          <button type="button" onClick={deleteSingleProduct} className="btn">
            delete
          </button>
          <button
            type="button"
            onClick={() => setNewCount(newCount + 1)}
            className="btn"
          >
            +
          </button>
          <p>COUNT: {newCount}</p>
          <button type="button" onClick={handleDecrementCount} className="btn">
            -
          </button>
          <button type="button" onClick={handleUpdateCount} className="btn">
            save
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
