import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import { AppDispatch } from "./app/store";
import { fetchAllProducts } from "./app/reducers/productsSlice";
import { products_url as url } from "./utils/constants";

function App() {
  let fetchRef = useRef(true);
  const dispatch = useDispatch<AppDispatch>();

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
        <Sidebar />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
