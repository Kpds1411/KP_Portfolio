import PropTypes from "prop-types";
import { contactInfo, colors, transition } from "../../constants";

const Contact = ({ isDarkMode }) => {
  const { background, text, cardBackground, heading, accent } = isDarkMode
    ? colors.dark
    : colors.light;

  return (
    <section
      className={`py-16 ${background} ${transition.duration}`}
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
            <p className={`text-lg ${text} ${transition.duration}`}>
              Below are the details to reach out to me!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        <div className="mt-8 text-center flex justify-center items-center">
          <p className={`${text} mr-4`}>Find me on: </p>
          <ul className="flex justify-center space-x-6">
            {contactInfo.socialLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xl ${text} hover:${accent}`}
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
  contactInfo: PropTypes.shape({
    details: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.node.isRequired,
        iconColor: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        link: PropTypes.string,
        linkText: PropTypes.string,
      })
    ).isRequired,
    socialLinks: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        iconClass: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Contact;
