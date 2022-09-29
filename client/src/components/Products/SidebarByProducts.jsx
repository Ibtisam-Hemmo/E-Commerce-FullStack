import React, { useState, useEffect } from "react";
import Axios from "axios";

function FilterBarByProduct({ setProducts, offset, setOffset, pageNum, setPageNum }) {


  useEffect(() => {
    const filterData = {
      search:'',
      category:'',
      minPrice:0,
      maxPrice:100,
      offset,
    };
    Axios.post("/product", filterData)
      .then((res) => {
        setProducts(res.data.rows);
        setPageNum(Math.floor(+res.data.rows[0].count / 6) + 1);
      })
      .catch(console.log);
  }, [pageNum,offset]);

  return (
    <div  />
  );
}

export default FilterBarByProduct;
