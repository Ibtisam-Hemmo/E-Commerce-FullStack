import React, { useEffect, useState } from "react";
import axios from "axios";
import CartProduct from "./CartProduct";

function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    axios("/api/v1/cart/get-product").then((products) => {
      setCartProducts(products.data);
    });

    axios("/api/v1/cart/get-totalPrice").then(({ data }) => {
      console.log(data);
      setTotalPrice(data);
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
      <p>Total Price {totalPrice}</p>
      <p>Total Count {cartProducts.reduce((acc, cur) => acc += cur.count, 0)}</p>
      
    </div>
  );
}

export default Cart;
