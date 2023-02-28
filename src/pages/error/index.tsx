import { Link } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
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
      <CookieConsent
        debug={true}
        location="bottom"
        style={{ background: "black", textAlign: "center" }}
        buttonStyle={{
          color: "black",
          background: "green",
          borderRadius: "20px",
          fontSize: "1rem",
        }}
        buttonText="Alright!"
        expires={1}
      >
        This Site Uses Cookies. Check out our{" "}
        <a href="/about">privacy policy</a> for more info.
      </CookieConsent>
    </section>
  );
};

export default ErrorPage;
