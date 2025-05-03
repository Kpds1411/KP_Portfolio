import { useState } from "react";
import PropTypes from "prop-types";
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
  const [submitted, setSubmitted] = useState(false);

  const formFields = [
    { label: "Name", name: "name", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Message", name: "message", type: "textarea" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xpwdpjaa", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to submit form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className={`pt-20 pb-8 ${background} ${transition.duration}`}
      id="contact-section"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold ${heading}`}>Contact</h1>
        </div>

        {/* Contact Info Cards */}
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
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {formFields.map((field, index) => (
              <div key={index}>
                <label className="block mb-1 font-medium">{field.label}</label>
                {field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    rows="5"
                    required
                    className={`${background} w-full px-4 py-2 rounded-md border border-transparent focus:border-blue-500 focus:ring-2 focus:outline-none`}
                  ></textarea>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    required
                    className={`${background} w-full px-4 py-2 rounded-md border border-transparent focus:border-blue-500 focus:ring-2 focus:outline-none`}
                  />
                )}
              </div>
            ))}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 text-lg font-semibold text-white ${button} ${buttonHover} rounded-full transition ${transition.duration}`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
            {submitted && (
              <p className="text-green-600 text-center mt-2">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>

        {/* Social Links */}
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
    </section>
  );
};

Contact.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Contact;
