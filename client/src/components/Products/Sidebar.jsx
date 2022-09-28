import React, { useState, useEffect } from "react";
import Axios from "axios";

function FilterBar() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [products, setProducts] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  const [a, seta] = useState(0);
  useEffect(() => {
    const filterData = {
      search,
      category,
      minPrice,
      maxPrice,
      a,
    };
    console.log(filterData);
    Axios.post("/product", filterData)
      .then((res) => {
        setProducts(res.data.rows);
        setPageNum(Math.floor(+res.data.rows[0].count / 2));
        console.log(res.data.rows);
      })
      .catch(console.log);
  }, [search, category, minPrice, maxPrice, pageNum, a]);
  return (
    <div>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <select name="filter" id="" onChange={(e) => setCategory(e.target.value)}>
        <option value="all">all</option>
        <option value="chair">Chair</option>
        <option value="kitchen">kitchen</option>
        <option value="Sofa">Sofa</option>
        <option value="table">table</option>
      </select>
      <input
        type="range"
        value={minPrice}
        name="minPrice"
        id=""
        min="0"
        max="100"
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="range"
        value={maxPrice}
        name="maxPrice"
        id=""
        min="0"
        max="100"
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      {new Array(pageNum).fill(0).map((ele, i) => (
        <button key={i} onClick={() => seta(i * 2)}>
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
