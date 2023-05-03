import React, { useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import usePageTitle from "../../hooks/usePageTitle";
import i18n from "../../translation";
import "./index.scss";

const HomeHero = React.lazy(() => import("../../components/home-hero"));
const Mission = React.lazy(() => import("../../components/mission"));
const ContactSection = React.lazy(() => import("../../components/contact"));
const FeaturedProducts = React.lazy(
  () => import("../../components/featured-products")
);

const Home = () => {
  // page title customization and localization
  const { changeTitle } = usePageTitle();
  const language = i18n.language;

  useEffect(() => {
    changeTitle({ language: language, enTitle: "Home", srTitle: "Početna" });
  }, [language, changeTitle]);

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
