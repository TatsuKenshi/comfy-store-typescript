import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section className="">
      <article className="">
        <h3 className="">
          Custom Shop <br /> Built Only For You
        </h3>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          repellendus! Minus omnis, optio facere nam iure tempora nesciunt?
          Voluptates, voluptatum quas nam ut sequi iure harum modi totam illo
          magnam.
        </p>
      </article>
      <div className="">
        <button>
          <Link to="/contact" className="">
            Contact Us
          </Link>
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
