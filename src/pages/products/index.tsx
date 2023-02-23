import "./index.scss";
import PageHero from "../../components/page-hero";
import Filters from "../../components/filters";
import Sort from "../../components/sort";
import ProductsList from "../../components/products-list";

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
    </section>
  );
};

export default Products;
