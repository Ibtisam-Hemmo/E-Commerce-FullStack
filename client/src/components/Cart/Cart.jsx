import React, { useEffect, useState } from "react";
import Axios from "axios";
import axios from "axios";

function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    Axios("/api/v1/cart/get-product").then((products) =>
      setCartProducts(products.data)
    );
  }, []);
  const deleteSingleProduct = () => {
    axios.post("/api/v1/cart/delete-product", { id: 1 });
  };
  return (
    <div>
      <button onClick={deleteSingleProduct}>delete</button>
      {console.log(cartProducts)}
    </div>
  );
}

export default Cart;
