import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";

// navbar, sidebar, footer go here, above and below the router component

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* sidebar */}
        <Router />
        {/* footer */}
      </BrowserRouter>
    </div>
  );
}

export default App;
