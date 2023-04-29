import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

const Footer = ({ t }: any) => {
  return (
    <footer className="p-8 bg-sky-900 text-white">
      {/* content section */}
      <section
        className="max-w-[1200px] mx-auto h-full flex flex-wrap"
        style={{ display: "flex" }}
      >
        <div className="w-full md:w-1/2 lg:w-1/4 mb-12 md:mb-8">
          <h4>{t("FooterName")}</h4>
          <div className="h-[4px] w-full md:w-11/12 max-w-[1200px] bg-yellow-700 bg-opacity-70 my-2"></div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-12 md:mb-8">
          <h4>{t("FooterAbout")}</h4>
          <div className="h-[4px] w-full md:w-11/12 max-w-[1200px] bg-yellow-700 bg-opacity-70 my-2"></div>
          <p>
            {t("FooterCompanySeat")} <br /> {t("FooterCompanyAddress")}
          </p>
          <p>
            {t("FooterHours")}
            <br />
            {t("FooterHoursDisplay")}
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-12 md:mb-8">
          <h4>{t("FooterContact")}</h4>
          <div className="h-[4px] w-full md:w-11/12 max-w-[1200px] bg-yellow-700 bg-opacity-70 my-2"></div>
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
        <div className="w-full md:w-1/2 lg:w-1/4 mb-12 md:mb-8">
          <h4>Linkovi</h4>
          <div className="h-[4px] w-full md:w-11/12 max-w-[1200px] bg-yellow-700 bg-opacity-70 my-2"></div>
          <p>
            <Link to="/">{t("Home")}</Link>
          </p>
          <p>
            <Link to="/about">{t("About")}</Link>
          </p>
          <p>
            <Link to="/contact">{t("Contact")}</Link>
          </p>
          <p>
            <Link to="/terms">{t("Terms")}</Link>
          </p>
          <p>
            <Link to="/products">{t("Products")}</Link>
          </p>
          <p>
            <Link to="/cart">{t("Cart")}</Link>
          </p>
          <p>
            {/* if user, then */}
            <Link to="/checkout">{t("Checkout")}</Link>
          </p>
        </div>
        <div className="h-[4px] w-full max-w-[1200px] bg-yellow-700 bg-opacity-70 mx-auto my-2"></div>
      </section>

      {/* copyright section */}
      <section className="max-w-[1200px] mx-auto text-center">
        <h5 className="mr-1">
          &copy; {new Date().getFullYear()}
          <span className="ml-1">Sara Akerman</span>
        </h5>
        <h5 className="ml-1">All rights reserved.</h5>
      </section>
    </footer>
  );
};

export default withTranslation()(Footer);
