import { Link } from "react-router-dom";
import "./index.scss";

const ErrorPage = () => {
  return (
    <section className="page-100" style={{ minHeight: "100vh" }}>
      <div>
        <h1>404</h1>
        <h3>Sorry, the page doesn't exist.</h3>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
