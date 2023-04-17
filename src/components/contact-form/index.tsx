import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import i18next from "i18next";

const ContactForm = () => {
  const form: any = useRef();
  const [messageSent, setMessageSent] = useState<string>("");
  const navigate = useNavigate();
  // const language = i18next.language;
  const language = "en";

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    delayError: 500,
    defaultValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
  });

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // Service ID
        "service_umggq1l",
        // Template ID
        "template_cf12iib",
        form.current,
        // Public key
        "bUQ3y_ETcXqGMoY73"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="">
      <div className="">
        <h2 className="">Welcome to the Contact page!</h2>
        <p>
          If you have any questions or suggestions regarding our products,
          prices, and delivery, or would like to order something special from
          our custom shop, please shoot us an email! We'd love to hear from you!
        </p>
      </div>

      <form
        ref={form}
        onSubmit={(e) => {
          sendEmail(e);

          setMessageSent(`
            ${
              language === "en"
                ? "Your message has been sent. You will be redirected to the home page shortly."
                : "Vaša poruka je poslata. Ubrzo ćete biti prebačeni na početnu stranu."
            }
          `);

          setTimeout(() => {
            setMessageSent("");
            navigate("/");
          }, 5000);
        }}
      >
        <div className="">
          <div>
            <label htmlFor="user_name" className="font-bold">
              Your Name
            </label>
          </div>
          <div>
            <input
              {...register("user_name", {
                required: "This field is required",
                minLength: { value: 4, message: "The name is too short" },
              })}
              id="user_name"
              className=""
            />
          </div>
          <p>{errors?.user_name?.message}</p>
        </div>

        <div className="">
          <div>
            <label htmlFor="user_email" className="">
              Email
            </label>
          </div>
          <div>
            <input
              type="email"
              id="user_email"
              {...register("user_email", {
                required: "A valid email Address is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match the email format.",
                },
              })}
              aria-invalid={errors.user_email ? "true" : "false"}
              className=""
            />
          </div>
          {errors.user_email && (
            <p role="alert">{errors.user_email?.message}</p>
          )}
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
  );
};

export default ContactForm;
