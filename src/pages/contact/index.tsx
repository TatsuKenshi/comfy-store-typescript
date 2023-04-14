import React from "react";
import "./index.scss";
import CookieConsent from "react-cookie-consent";

const PageHero = React.lazy(() => import("../../components/page-hero"));
const ContactForm = React.lazy(() => import("../../components/contact-form"));

const Contact = () => {
  return (
    <section>
      <PageHero title={"Contact"} />

      <ContactForm />

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

export default Contact;
