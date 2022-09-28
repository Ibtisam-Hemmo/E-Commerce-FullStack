import React, { useEffect, useState } from "react";
import axios from "axios";

function CartProduct({ product, cartProducts, setCartProducts }) {
    const { id, count } = product;
    const [newCount, setNewCount] = useState(count);

    const deleteSingleProduct = () => {
        axios.post("/api/v1/cart/delete-product", { id });
        const newCartProducts = cartProducts.filter(p => p.id !== id);
        setCartProducts(newCartProducts);
    };
    
    const handleUpdateCount = () => {
        axios.post("/api/v1/cart/update-product", { newCount, id });
    };

    const handleDecrementCount = () => {
        newCount > 1 ? setNewCount(newCount - 1) : deleteSingleProduct();
    };

    return (
        <div>
            <button type="button" onClick={deleteSingleProduct}>
                delete
            </button>
            <button type="button" onClick={() => setNewCount(newCount + 1)}>
                +
            </button>
            <button type="button" onClick={handleDecrementCount}>
                -
            </button>
            <button type="button" onClick={handleUpdateCount}>
                save
            </button>
            <p>COUNT: { newCount }</p>
        </div>
    );
}

export default CartProduct;
