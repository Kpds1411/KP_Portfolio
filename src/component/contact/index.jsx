import { useState } from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { contactInfo, colors, transition } from "../../constants";

const Contact = ({ isDarkMode }) => {
  const {
    background,
    text,
    cardBackground,
    heading,
    accent,
    button,
    buttonHover,
  } = isDarkMode ? colors.dark : colors.light;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validate = (formData) => {
    const errors = {};
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const message = formData.get("message")?.trim();

    if (!name || name.length < 3 || name.length > 50) {
      errors.name = "Name must be between 3 and 50 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = "Enter a valid email address.";
    }

    if (!message || message.length < 10 || message.length > 500) {
      errors.message = "Query must be between 10 and 500 characters.";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const errors = validate(formData);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xpwdpjaa", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        e.target.reset();
        toast.success("Query sent successfully!");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formFields = [
    { label: "Name", name: "name", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Upload Queries", name: "message", type: "textarea" },
  ];

  return (
    <section
      className={`pt-20 pb-8 ${background} ${transition.duration}`}
      id="contact-section"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold ${heading}`}>Contact</h1>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.details.map((info, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-md hover:shadow-xl ${cardBackground} ${text} ${transition.duration} transform hover:scale-105 flex flex-col items-center`}
            >
              <div className="text-3xl mb-4">{info.icon}</div>
              <h3 className={`text-xl font-semibold ${heading} mb-2`}>
                {info.title}
              </h3>
              <div className="text-center">
                {info.link ? (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${accent} hover:underline`}
                  >
                    {info.linkText}
                  </a>
                ) : (
                  <p>{info.text}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div
          className={`max-w-2xl mx-auto p-6 rounded-lg shadow-md ${cardBackground} ${text}`}
        >
          <h2 className={`text-2xl font-semibold mb-4 text-center ${heading}`}>
            Let&apos;s Connect & Build
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {formFields.map((field, index) => (
              <div key={index}>
                <label className="block mb-1 font-medium">
                  {field.label} <span className="text-red-500">*</span>
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    rows="5"
                    onChange={() =>
                      setFormErrors((prev) => ({ ...prev, [field.name]: "" }))
                    }
                    className={`${background} w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:outline-none`}
                  ></textarea>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    onChange={() =>
                      setFormErrors((prev) => ({ ...prev, [field.name]: "" }))
                    }
                    className={`${background} w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:outline-none`}
                  />
                )}
                {formErrors[field.name] && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors[field.name]}
                  </p>
                )}
              </div>
            ))}
            <div className="flex justify-center items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 text-lg font-semibold text-white ${button} ${buttonHover} rounded-full transition ${transition.duration} flex justify-center items-center gap-2 disabled:opacity-60`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      ></path>
                    </svg>
                    Pushing...
                  </>
                ) : (
                  "Push"
                )}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12 flex justify-center items-center">
          <p className={`${text} mr-4`}>Find me on:</p>
          <ul className="flex space-x-4">
            {contactInfo.socialLinks.map((link, index) => (
              <li
                key={index}
                className="p-2 bg-blue-600 w-10 h-10 rounded-md flex justify-center items-center"
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-white hover:text-yellow-300"
                >
                  <span className={link.iconClass}></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

Contact.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Contact;
