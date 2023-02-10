import React from "react";
import { services } from "../../utils/constants";

const Mission = () => {
  return (
    <section>
      <div className="section-center">
        <article className="header">
          <h3>
            Custom Furniture <br />
            Built Only For You
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            obcaecati deserunt temporibus. Totam optio commodi minus vero sit
            delectus atque.
          </p>
        </article>
        <div className="services-center">
          {services.map((service) => {
            const { id, icon: Icon, title, text } = service;

            return (
              <article key={id} className="service">
                <span className="icon">
                  <Icon />
                </span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Mission;
