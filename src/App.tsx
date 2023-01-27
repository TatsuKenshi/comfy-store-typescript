import { useEffect, useRef, useCallback } from "react";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import axios from "axios";
import { products_url as url } from "./utils/constants";
import { fetchAllProducts, getAllProducts } from "./app/reducers/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./app/store";

function App() {
  let fetchRef = useRef(true);
  const dispatch = useDispatch<AppDispatch>();
  const prods = useSelector(getAllProducts);

  useEffect(() => {
    if (fetchRef.current) {
      dispatch(fetchAllProducts(url));
      fetchRef.current = false;
    }
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {prods.map((prod: {}, index: number) => {
          return <span key={index}>{index}</span>;
        })}
        <Sidebar />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
