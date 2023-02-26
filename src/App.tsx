import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import { AppDispatch } from "./app/store";
import { fetchAllProducts } from "./app/reducers/productsSlice";
import { products_url as url } from "./utils/constants";
import { getCart, countCartTotals } from "./app/reducers/cartSlice";

function App() {
  let fetchRef = useRef(true);
  const cart = useSelector(getCart);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (fetchRef.current) {
      dispatch(fetchAllProducts(url));
      fetchRef.current = false;
    }
  }, [dispatch]);

  // useEffect updates the cart state in localStorage
  // dispatches countCartTotals (calculates total_amount, total_items)
  // whenever the cart array (CartProductType[]) changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch(countCartTotals());
  }, [dispatch, cart]);

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
