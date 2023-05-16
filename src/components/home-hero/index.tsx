import { Link } from "react-router-dom";
import heroBcg from "../../assets/hero-bcg.jpeg";
import heroBcgPlaceholder from "../../assets/heroBcgPlaceHolder.jpg";
import heroBcg2 from "../../assets/hero-bcg-2.jpeg";
import heroBcgPlaceholder2 from "../../assets/heroBcgPlaceholder2.jpeg";
import ProgressiveImage from "react-progressive-graceful-image";

const HomeHero = () => {
  return (
    <section className="section-center">
      <article className="content">
        <h1>
          Design Your <br /> Comfort Zone
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolore
          nemo in asperiores ut. Quibusdam soluta maiores similique numquam
          nobis suscipit laborum, animi hic consequatur ea tempore vitae nulla
          asperiores?
        </p>
        <Link to="/products" className="btn hero-btn">
          <button>Shop Now</button>
        </Link>
      </article>

      <article className="img-container" style={{ display: "flex" }}>
        {/* <img
          src={heroBcg}
          alt="main"
          className="main-img"
          width="300px"
          height="300px"
        />
        <img
          src={heroBcg2}
          alt="small"
          className="accent-img"
          width="300px"
          height="300px"
        /> */}
        <ProgressiveImage src={heroBcg} placeholder={heroBcgPlaceholder}>
          {(src, loading) => (
            <img
              alt="Corporate Office"
              className={`image${loading ? " loading" : " loaded"}`}
              src={src}
              width="300px"
              height="300px"
            />
          )}
        </ProgressiveImage>
        <ProgressiveImage src={heroBcg2} placeholder={heroBcgPlaceholder2}>
          {(src, loading) => (
            <img
              alt="Corporate Office"
              className={`image${loading ? " loading" : " loaded"}`}
              src={src}
              width="300px"
              height="300px"
            />
          )}
        </ProgressiveImage>
      </article>
    </section>
  );
};

export default HomeHero;
