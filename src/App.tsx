import Router from "./router";
import { BrowserRouter } from "react-router-dom";

// navbar, sidebar, footer go here, above and below the router component

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* navbar */}
        {/* sidebar */}
        <Router />
        {/* footer */}
      </BrowserRouter>
    </div>
  );
}

export default App;
