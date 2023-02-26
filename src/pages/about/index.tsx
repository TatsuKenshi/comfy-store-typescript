import hero from "../../assets/hero-bcg.jpeg";
import PageHero from "../../components/page-hero";
import "./index.scss";

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
    </main>
  );
};

export default About;
