import HomeHero from "../../components/home-hero";
import FeaturedProducts from "../../components/featured-products";
import Mission from "../../components/mission";
import ContactSection from "../../components/contact";
import CookieConsent from "react-cookie-consent";
import "./index.scss";

const Home = () => {
  return (
    <main>
      <HomeHero />
      <FeaturedProducts />
      <Mission />
      <ContactSection />
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
    </main>
  );
};

export default Home;
