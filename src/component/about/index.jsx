import PropTypes from "prop-types";
import {
  aboutContent,
  projectsCompleted,
  colors,
  transition,
  aboutProfileImage,
} from "../../constants";
import { buttonsData } from "../../constants/about";

const About = ({ isDarkMode }) => {
  const { background, text, heading } =
    isDarkMode ? colors.dark : colors.light;

  return (
    <section
      id="about-section"
      className={`pt-20 ${background} transition-all ${transition.duration}`}
    >
      <div className="container mx-auto px-4">
        <div className={`mx-auto max-w-4xl ${text} ${transition.duration}`}>
          <div className="mb-8 flex flex-col items-center">
            <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-white bg-gray-100 shadow-lg ring-1 ring-gray-200">
              <img
                src={aboutProfileImage}
                className="w-full h-full object-cover object-top"
                alt="Profile"
              />
            </div>
            <div
              className={`text-center ${text} transition-all ${transition.duration}`}
            >
              {aboutContent.personalInfo.map((item, index) => (
                <p key={index} className="text-lg mb-2">
                  <span className="font-semibold">{item.label}:</span>{" "}
                  {item.value}
                </p>
              ))}
            </div>
          </div>

          <h1
            className={`mb-4 text-center text-4xl font-bold ${heading} ${transition.duration}`}
          >
            About
          </h1>
          <div className="mb-8">
            <p className={`text-lg ${text} ${transition.duration}`}>
              {aboutContent.description}
            </p>
          </div>
          <ul className="space-y-1 md:space-y-3 list-disc px-5">
            {aboutContent.additionalInfo.map((item, index) => (
              <li
                className={`text-lg ${text} ${transition.duration}`}
                key={index}
              >
                <span className="font-semibold">{item.label} : </span>
                {item.value}
              </li>
            ))}
          </ul>

          <div className="mt-8 text-center">
            <p className={`text-lg mb-4 ${text} ${transition.duration}`}>
              <span
                className={`text-2xl font-semibold ${heading} ${transition.duration}`}
              >
                {projectsCompleted}
              </span>
              + Projects Completed
            </p>
            <div className="flex flex-wrap justify-center items-center !gap-5 sm:gap-0">
              {buttonsData.map((res) => (
                <a
                  key={res.key}
                  href={res.url}
                  className={`inline-block px-6 py-3 text-lg font-semibold text-white  ${
                    colors.isDarkMode
                      ? colors.dark.button
                      : colors.light.button
                  } rounded-lg hover:bg-blue-700 transition ${
                    transition.duration
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {res.buttonText}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default About;
