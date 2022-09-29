import React, { useEffect, useState } from "react";
import axios from "axios";
import CartProduct from "./CartProduct";

function Cart({ isLogged, setShowForm }) {
  const [cartProducts, setCartProducts] = useState([]);

  // useEffect(() => {
  //   if(isLogged.msg){

  //     setShowForm(true)
  //     console.log('showForm')
  //     console.log(setShowForm)
  //   }
  // }, [])

  useEffect(() => {
    axios("/api/v1/cart/get-product").then((products) => {
      setCartProducts(products.data);
    });
  }, []);

  return !isLogged.msg ? (
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
  ) : (
    <h1 className="allowed">Not Allowed</h1>
  );
}

export default Cart;
