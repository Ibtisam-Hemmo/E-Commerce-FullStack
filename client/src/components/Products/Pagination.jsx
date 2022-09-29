import React from "react";

function Pagination({ setOffset, pageNum,products }) {
  return (
    <div className="pagenation">
      {new Array(pageNum).fill(0).map((ele, i) => (
        <button key={i} onClick={() => {
          console.log(products);
          setOffset(i * 6)}}>
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
