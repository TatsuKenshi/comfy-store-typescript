import React from "react";
import hero from "../../assets/hero-bcg.jpeg";
import CookieConsent from "react-cookie-consent";
import "./index.scss";

const PageHero = React.lazy(() => import("../../components/page-hero"));

const About = () => {
  return (
    <main className="">
      <PageHero title="About" />
      <section className="">
        <div className="">
          <img src={hero} alt="hero" />
        </div>
        <article className="">
          <div className="">
            <h2 className="">Our Story</h2>
            <div className=""></div>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              possimus corporis quos fugiat animi quasi, accusamus
              exercitationem ullam veniam commodi quisquam neque numquam.
              Exercitationem inventore officiis quaerat eos enim accusamus
              minima tenetur architecto quas, corporis nemo labore id a
              provident libero reiciendis omnis placeat. Earum quibusdam
              doloremque totam consequatur quis!
            </p>
          </div>
        </article>
      </section>
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

export default About;
