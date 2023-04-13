import React from "react";
import "./index.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import CookieConsent from "react-cookie-consent";

const PageHero = React.lazy(() => import("../../components/page-hero"));

const Contact = () => {
  const [messageSent, setMessageSent] = useState<string>("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    delayError: 500,
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  return (
    <section>
      <PageHero title={"Contact"} />

      <div className="">
        <div className="">
          <h2 className="">Welcome to the Contact page!</h2>
          <p>
            If you have any questions or suggestions regarding our products,
            prices, and delivery, or would like to order something special from
            our custom shop, please shoot us an email! We'd love to hear from
            you!
          </p>
        </div>

        <form
          onSubmit={handleSubmit((data) => {
            setMessageSent(
              "Your message has been sent. You will be redirected to the home page shortly."
            );

            setTimeout(() => {
              setMessageSent("");
              navigate("/");
            }, 5000);
          })}
        >
          <div className="">
            <div>
              <label htmlFor="fullName" className="font-bold">
                Your Name
              </label>
            </div>
            <div>
              <input
                {...register("fullName", {
                  required: "This field is required",
                  minLength: { value: 4, message: "The name is too short" },
                })}
                id="fullName"
                className=""
              />
            </div>
            <p>{errors?.fullName?.message}</p>
          </div>

          <div className="">
            <div>
              <label htmlFor="email" className="">
                Email
              </label>
            </div>
            <div>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "A valid email Address is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match the email format.",
                  },
                })}
                aria-invalid={errors.email ? "true" : "false"}
                className=""
              />
            </div>
            {errors.email && <p role="alert">{errors.email?.message}</p>}
          </div>

          <div className="">
            <div>
              <label htmlFor="message" className="">
                Your Message
              </label>
            </div>
            <div>
              <textarea
                rows={4}
                cols={50}
                {...register("message", {
                  required: "This field is required",
                  minLength: { value: 4, message: "The message is too short" },
                })}
                id="message"
                className=""
              />
            </div>
            <p>{errors?.message?.message}</p>
          </div>

          <div className="p-4">
            <input type="submit" className="" disabled={!isValid} />
          </div>

          <div>
            <p>{messageSent}</p>
          </div>
        </form>
      </div>
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
