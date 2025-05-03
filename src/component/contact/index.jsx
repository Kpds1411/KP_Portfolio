import { useState } from "react";
import PropTypes from "prop-types";
import { contactInfo, colors, transition } from "../../constants";

const Contact = ({ isDarkMode }) => {
  const { background, text, cardBackground, heading, accent } = isDarkMode
    ? colors.dark
    : colors.light;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
        <div className="row justify-center mb-8">
          <div className="col-md-7 text-center">
            <h1
              className={`text-4xl font-bold ${heading} ${transition.duration}`}
            >
              Contact
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.details.map((info, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-md hover:shadow-xl ${cardBackground} ${text} ${transition.duration} transform hover:scale-105 flex flex-col items-center`}
            >
              <div className="flex justify-center items-center mb-4">
                <span className={`text-3xl ${info.iconColor}`}>
                  {info.icon}
                </span>
              </div>
              <h3
                className={`text-xl font-semibold text-center ${heading} mb-2`}
              >
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
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-2 rounded-md text-white font-semibold transition ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
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
        <div className="mt-12 text-center flex justify-center items-center">
          <p className={`${text} mr-4`}>Find me on: </p>
          <ul className="flex justify-center space-x-4">
            {contactInfo.socialLinks.map((link, index) => (
              <li
                key={index}
                className="p-2 bg-blue-600 w-10 h-10 rounded-md flex justify-center items-center"
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xl ${text} hover:${accent}`}
                >
                  <span
                    style={{ color: "white" }}
                    className={link.iconClass}
                  ></span>
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
