import React from "react";
import { Link } from "react-router-dom";
import heroBcg from "../../assets/hero-bcg.jpeg";
import heroBcg2 from "../../assets/hero-bcg-2.jpeg";

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
        <img
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
        />
      </article>
    </section>
  );
};

export default HomeHero;
