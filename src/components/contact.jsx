import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { AiFillMessage } from "react-icons/ai";
import { useForm } from "react-hook-form";
import "./main.css"; // custom styles

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    reset();
  };

  return (
    <div className="outer-container contact-box">
      <div className="contact-text ">
        <h2 className="gradient-text-lg">Do you have a project to discuss?</h2>
        <p>Feel free to contact <AiFillMessage />
</p>
        <div className="flex-center social-icons">
          <CgMail className="icons" />
          <CiLinkedin className="icons"  />
<FaGithubSquare  className="icons"  />

        </div>
      </div>

      <div className="contact-form">
        <h2 className="contact-title gradient-text-sm">Contact Form</h2>

        {isSubmitSuccessful && (
          <p className="success-message">Message sent successfully!</p>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-container flex-col"
        >
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Your name"
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              placeholder="Your email"
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              placeholder="Your message"
              rows="4"
            ></textarea>
            {errors.message && (
              <p className="error">{errors.message.message}</p>
            )}
          </div>

          <button type="submit" className="submit-button gradient-text-sm">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
