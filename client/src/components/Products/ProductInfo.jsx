import React from 'react'

function ProductInfo({product}) {
    const {name, price, img, id, description, category} = product;

  return (
    <div className="pop-container" >
      <img src={img} alt="image" className="book-img" />
      <div className="pop-content">
        <h1 className="book-title">{name}</h1>
        <h1 className="book-title">{price}$</h1>
        <p className="book-author"> {category}</p>
        <p className="book-desc">{description}</p>
      </div>
    </div> 
  )
}

export default ProductInfo;
