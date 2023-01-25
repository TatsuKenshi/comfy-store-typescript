import React from "react";
import ContactSection from "../../components/contact";
import FeaturedProducts from "../../components/featured-products";
import HomeHero from "../../components/home-hero";
import Mission from "../../components/mission";

const Home = () => {
  return (
    <div>
      This is the home page.
      <HomeHero />
      <FeaturedProducts />
      <Mission />
      <ContactSection />
    </div>
  );
};

export default Home;
