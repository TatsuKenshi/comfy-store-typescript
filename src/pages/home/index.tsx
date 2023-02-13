import HomeHero from "../../components/home-hero";
import FeaturedProducts from "../../components/featured-products";
import Mission from "../../components/mission";
import ContactSection from "../../components/contact";
import "./index.scss";

const Home = () => {
  return (
    <main>
      <HomeHero />
      <FeaturedProducts />
      <Mission />
      <ContactSection />
    </main>
  );
};

export default Home;
