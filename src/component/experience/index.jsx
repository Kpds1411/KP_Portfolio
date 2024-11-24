import PropTypes from "prop-types";
import {
  experienceData,
  educationData,
  colors,
  transition,
} from "../../constants";

const Experience = ({ isDarkMode }) => {
  const { background, text, cardBackground, heading } = isDarkMode
    ? colors.dark
    : colors.light;

  return (
    <section
      id="experience-section"
      className={`${background} ${transition.duration}`}
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h1
            className={`text-4xl font-bold ${heading} ${transition.duration}`}
          >
            Experience
          </h1>
          <p
            className={`text-xl mt-4 max-w-xl mx-auto ${text} ${transition.duration}`}
          >
            Highlighting key roles in my career and how I’ve helped businesses
            grow through impactful work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {experienceData.map((experience, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl shadow-md hover:shadow-2xl ${cardBackground} ${text} ${transition.duration} transform hover:scale-105`}
            >
              <span className="text-sm text-gray-500">{experience.date}</span>
              <h2 className="text-2xl font-semibold mt-2">
                {experience.title}
              </h2>
              <span className={`font-medium block mt-1 ${text}`}>
                {experience.company}
              </span>
              <div className="mt-4">
                <ul className="list-disc pl-6 space-y-2">
                  {experience.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-12 text-center pt-20">
          <h1
            className={`text-4xl font-bold ${heading} ${transition.duration}`}
          >
            Education
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {educationData.map((education, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl shadow-md hover:shadow-2xl ${cardBackground} ${text} ${transition.duration} transform hover:scale-105`}
            >
              <span className="text-sm text-gray-500">{education.date}</span>
              <h2 className="text-2xl font-semibold mt-2">{education.title}</h2>
              <span className={`font-medium block mt-1 ${text}`}>
                {education.institution}
              </span>
              <p className="mt-4">
                Grade: <span className="font-semibold">{education.grade}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Experience.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Experience;
