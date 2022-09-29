import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import ProductInfo from "./ProductInfo";

function ProductCard({ product, user_id }) {
  console.log(user_id.id);
  const { name, price, img, id } = product;
  const [showProductInfo, setShowproductInfo] = useState(false);

  const showProduct = (bool) => {
    setShowproductInfo(bool);
  };
  const addToCart = () => {
    axios
      .post("/addToCart", { product_id: id, user_id: user_id.id })
      .then((data) => console.log(data));
  };

  const useClickOutside = (cb) => {
    const productInfoRef = useRef();

    useEffect(() => {
      const handleProductInfoShow = (e) => {
        if (!productInfoRef.current.contains(e.target)) cb();
      };

      document.addEventListener("click", handleProductInfoShow);

      return () => {
        document.removeEventListener("click", handleProductInfoShow);
      };
    });

    return productInfoRef;
  };
  const productInfoRef = useClickOutside(() => showProduct(false));
  return (
    <div className="product-card" ref={productInfoRef}>
      <img src={img} alt="product" className="product-img" />
      <div className="product-card-info">
        <p className="product-title">{name}</p>
        <p className="product-price">{price.toFixed(2)}$</p>
        <div className="product-cards-btns">
          <button
            aria-label="button"
            className="add-cart btn"
            onClick={addToCart}
          >
            Add to Cart
          </button>
          <button aria-label="button" className="icon">
            <i className="fa-regular fa-heart" />
          </button>
          <button
            aria-label="button"
            className="icon"
            onClick={() => showProduct(true)}
          >
            <i className="fa-solid fa-question" />
          </button>
          {showProductInfo && (
            <ProductInfo product={product} ref={productInfoRef} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
