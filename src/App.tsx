import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";

function App() {
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
