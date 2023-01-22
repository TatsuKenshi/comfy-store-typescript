import { useEffect, useRef, useCallback } from "react";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import axios from "axios";
import { products_url as url } from "./utils/constants";
import { addAllProducts, getAllProducts } from "./app/reducers/productsSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  let fetchRef = useRef(true);
  const dispatch = useDispatch();
  const prods = useSelector(getAllProducts);

  const fetchProducts = useCallback(
    async (url: string) => {
      try {
        const response = await axios.get(url);
        const products = response.data;
        dispatch(addAllProducts(products));
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (fetchRef.current) {
      fetchProducts(url);
      fetchRef.current = false;
    }
  }, [fetchProducts]);

  return (
    <div className="App">
      <BrowserRouter>
        {/* {prods.map((prod: {}, index: number) => {
          return <span key={index}>{index}</span>;
        })} */}
        <Navbar />
        <Sidebar />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
