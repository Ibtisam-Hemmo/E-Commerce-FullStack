import React, { useEffect, useState } from "react";
import Axios from "axios";

function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    Axios("/api/v1/cart/get-product").then((products) =>
      setCartProducts(products.data)
    );
  }, []);
  return <div>{console.log(cartProducts)}</div>;
}

export default Cart;
