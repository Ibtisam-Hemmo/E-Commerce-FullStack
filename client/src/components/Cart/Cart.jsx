import React, { useEffect, useState } from "react";
import axios from "axios";
import CartProduct from "./CartProduct";

function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    axios("/api/v1/cart/get-product").then((products) => {
      setCartProducts(products.data);
    });
  }, []);

  return (
    <div>
      {cartProducts.map((product) => (
        <CartProduct
          product={product}
          key={product.id}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
        />
      ))}
    </div>
  );
}

export default Cart;
