import "./index.scss";
import PageHero from "../../components/page-hero";
import Filters from "../../components/filters";
import Sort from "../../components/sort";
import ProductsList from "../../components/products-list";
import CookieConsent from "react-cookie-consent";

const Products = () => {
  return (
    <section>
      <PageHero title="Products" />

      <div className="page" style={{ display: "flex" }}>
        <aside className="section-center products">
          <Filters />
        </aside>

        <article>
          <div>
            <Sort />
          </div>

          <div>
            <ProductsList />
          </div>
        </article>
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

export default Products;
