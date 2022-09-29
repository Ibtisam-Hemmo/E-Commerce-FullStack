import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Navbar/Landing";
import FilterBar from "./components/Products/Sidebar";
import ProductsList from "./components/Products/ProductsList";
import Pagination from "./components/Products/Pagination";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
import Footer from "./components/Products/Footer";
import "./App.css";
import FilterBarByProduct from "./components/Products/SidebarByProducts";
import SignIn from "./components/Navbar/Signin";

function App() {
  const [products, setProducts] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isLogged, setIsLogged] = useState({});
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios
      .get("/isLogged")
      .then((data) => setIsLogged(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar
        setOffset={setOffset}
        isLogged={isLogged}
        showForm={showForm}
        setShowForm={setShowForm}
      />
      <Routes>
        <Route
          element={
            <>
              <Landing />
              <FilterBar
                setProducts={setProducts}
                offset={offset}
                setOffset={setOffset}
                pageNum={pageNum}
                setPageNum={setPageNum}
              />
              <ProductsList products={products} user_id={isLogged} />
              <Pagination pageNum={pageNum} setOffset={setOffset} />
              <Footer />
            </>
          }
          path="/"
        />

        <Route
          element={
            <>
              <FilterBarByProduct
                setProducts={setProducts}
                offset={offset}
                setOffset={setOffset}
                pageNum={pageNum}
                setPageNum={setPageNum}
              />
              <ProductsList products={products} user_id={isLogged} />
              <Pagination
                pageNum={pageNum}
                products={products}
                setOffset={setOffset}
              />
            </>
          }
          path="/products"
        />
        <Route
          element={<Cart isLogged={isLogged} setShowForm={setShowForm} />}
          path="/cart"
        />
      </Routes>
    </>
  );
}

export default App;
