import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { useAuth0 } from "@auth0/auth0-react";

const Footer = ({ t }: any) => {
  const { user } = useAuth0();

  return (
    <footer className="">
      {/* content section */}
      <section className="" style={{ display: "flex" }}>
        <div className="">
          <h4>{t("FooterName")}</h4>
          <div className=""></div>
        </div>
        <div className="">
          <h4>{t("FooterAbout")}</h4>
          <div className=""></div>
          <p>
            {t("FooterCompanySeat")} <br /> {t("FooterCompanyAddress")}
          </p>
          <p>
            {t("FooterHours")}
            <br />
            {t("FooterHoursDisplay")}
          </p>
        </div>
        <div className="">
          <h4>{t("FooterContact")}</h4>
          <div className=""></div>
          <p>
            {t("FooterContactPhone")} <br />
            +381 66 426 624
          </p>
          <p>
            {t("FooterContactEmail")}
            <br />
            {t("FooterContactEmailDisplay")}
            <br />
            {t("FooterContactEmailDisplay2")}
          </p>
        </div>

        {/* links section */}
        <div className="">
          <h4>Linkovi</h4>
          <div className=""></div>
          <p>
            <Link to="/">{t("Home")}</Link>
          </p>
          <p>
            <Link to="/about">{t("About")}</Link>
          </p>
          <p>
            <Link to="/products">{t("Products")}</Link>
          </p>
          <p>
            <Link to="/cart">{t("Cart")}</Link>
          </p>
          <p>
            <Link to="/contact">{t("Contact")}</Link>
          </p>
          <p>
            <Link to="/terms">{t("Terms")}</Link>
          </p>
          <p>
            <Link to="/faq">{t("FAQ")}</Link>
          </p>
          {user ? (
            <p>
              {/* if user, then */}
              <Link to="/checkout">{t("Checkout")}</Link>
            </p>
          ) : null}
        </div>
        <div className=""></div>
      </section>

      {/* copyright section */}
      <section className="">
        <h5 className="">
          &copy; {new Date().getFullYear()}
          <span className="">Sara Akerman</span>
        </h5>
        <h5 className="">All rights reserved.</h5>
      </section>
    </footer>
  );
};

export default withTranslation()(Footer);
