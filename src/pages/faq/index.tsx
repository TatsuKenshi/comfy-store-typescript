import React, { useEffect } from "react";
import usePageTitle from "../../hooks/usePageTitle";
import i18n from "../../translation";
import CookieConsent from "react-cookie-consent";

const PageHero = React.lazy(() => import("../../components/page-hero"));
const FaqQuestionsList = React.lazy(
  () => import("../../components/faq-questions-list")
);

const FrequentlyAskedQuestions = () => {
  // page title customization and localization
  const { changeTitle } = usePageTitle();
  const language = i18n.language;

  useEffect(() => {
    changeTitle({ language: language, enTitle: "Home", srTitle: "Početna" });
  }, [language, changeTitle]);

  return (
    <div>
      <div>
        <PageHero title="Disclaimer" />
      </div>
      <div>
        <h1>Questions</h1>
      </div>
      <div>
        <FaqQuestionsList />
      </div>

      <div>
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
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
