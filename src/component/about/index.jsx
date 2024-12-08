import PropTypes from "prop-types";
import {
  aboutContent,
  skills,
  projectsCompleted,
  colors,
  transition,
  aboutProfileImage,
} from "../../constants";
import { buttonsData } from "../../constants/about";

const About = ({ isDarkMode }) => {
  const { background, text, heading, cardBackground, skillProgressColor } =
    isDarkMode ? colors.dark : colors.light;

  return (
    <section
      id="about-section"
      className={`pt-20 ${background} transition-all ${transition.duration}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap md:flex-nowrap">
          <div
            className={`relative flex flex-col items-center p-6 rounded shadow-md hover:shadow-2xl ${cardBackground}`}
          >
            <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
              <img
                src={aboutProfileImage}
                className="w-full h-full object-cover"
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
            <div className="mt-8 w-full">
              <h4
                className={`text-xl font-semibold mb-4 ${text} ${transition.duration}`}
              >
                Skills:
              </h4>
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between">
                    <span className={`${text} ${transition.duration}`}>
                      {skill.name}
                    </span>
                    <span className={`${text} ${transition.duration}`}>
                      {skill.level}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-300 rounded-full">
                    <div
                      className={`h-full rounded-full transition-all ${skillProgressColor}`}
                      style={{
                        width: skill.level,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`w-full pt-16 md:pt-0 md:w-1/2 lg:w-3/5 pl-4 md:pl-8 ${text} ${transition.duration}`}
          >
            <div className="mb-8">
              <h1
                className={`text-4xl text-center font-bold mb-4 ${heading} ${transition.duration}`}
              >
                About Me
              </h1>
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
                + Projects completed
              </p>
              <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-0">
                {buttonsData.map((res) => (
                  <a
                    key={res.key}
                    href={res.url}
                    className={`inline-block px-6 py-3 text-lg font-semibold text-white ${
                      colors.isDarkMode
                        ? colors.dark.button
                        : colors.light.button
                    } rounded-full hover:bg-blue-700 transition ${
                      transition.duration
                    } mr-4`}
                    target="_blank"
                  >
                    {res.buttonText}
                  </a>
                ))}
              </div>
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
