import PropTypes from "prop-types";
import {
  aboutContent,
  skills,
  aboutProfileImage,
  projectsCompleted,
  linkedinUrl,
  colors,
  transition,
  resume,
} from "../../constants";

const About = ({ isDarkMode }) => {
  const { background, text, heading, cardBackground, skillProgressColor } =
    isDarkMode ? colors.dark : colors.light;

  return (
    <section
      id="about-section"
      className={`py-20 ${background} transition-all ${transition.duration}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="w-full md:w-1/2 lg:w-2/5 mb-8 md:mb-0 relative">
            <div
              className={`absolute inset-0 ${cardBackground} opacity-50 transition-all ${transition.duration}`}
            ></div>
            <div className="relative flex flex-col items-center p-6">
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
          </div>

          <div
            className={`w-full md:w-1/2 lg:w-3/5 pl-4 md:pl-8 ${text} ${transition.duration}`}
          >
            <div className="mb-8">
              <h1
                className={`text-4xl font-bold mb-4 ${heading} ${transition.duration}`}
              >
                About Me
              </h1>
              <p className={`text-lg ${text} ${transition.duration}`}>
                {aboutContent.description}
              </p>
            </div>
            <ul className="space-y-4">
              {aboutContent.additionalInfo.map((item, index) => (
                <li
                  className={`flex gap-2 text-lg ${text} ${transition.duration}`}
                  key={index}
                >
                  <span className="font-semibold min-w-fit">
                    {item.label} :
                  </span>{" "}
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
                </span>{" "}
                + Projects completed
              </p>
              <a
                href={linkedinUrl}
                className={`inline-block px-6 py-3 text-lg font-semibold text-white ${
                  colors.isDarkMode ? colors.dark.button : colors.light.button
                } rounded-full hover:bg-blue-700 transition ${
                  transition.duration
                } mr-4`}
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                href={resume}
                className={`inline-block px-6 py-3 text-lg font-semibold text-white ${
                  colors.isDarkMode ? colors.dark.button : colors.light.button
                } rounded-full hover:bg-blue-700 transition ${
                  transition.duration
                }`}
                target="_blank"
              >
                Download CV
              </a>
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
