import React from "react";
import ContactSection from "../../components/contact";
import FeaturedProducts from "../../components/featured-products";
import HomeHero from "../../components/home-hero";
import Mission from "../../components/mission";
import "./index.scss";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <FeaturedProducts />
      <Mission />
      <ContactSection />
    </div>
  );
};

export default Home;
