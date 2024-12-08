import PropTypes from "prop-types";
import { experienceData, colors, transition } from "../../constants";

const Experience = ({ isDarkMode }) => {
  const { background, text, cardBackground, heading } = isDarkMode
    ? colors.dark
    : colors.light;

  return (
    <section
      className={`pt-20 ${background} ${transition.duration}`}
      id="experience-section"
    >
      <div className="container mx-auto px-4">
        <div className="row justify-center mb-8">
          <div className="col-md-7 text-center">
            <h1
              className={`text-4xl font-bold ${heading} ${transition.duration}`}
            >
              Experience
            </h1>
            {/* <p className={`text-lg mt-2.5 ${text} ${transition.duration}`}>
              Highlighting key roles in my career and how I’ve helped businesses
              grow through impactful work.
            </p> */}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {experienceData.map((experience, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl shadow-md hover:shadow-2xl ${cardBackground} ${text} ${transition.duration} transform hover:scale-105`}
            >
              <span className={`text-sm ${text}`}>{experience.date}</span>
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
      </div>
    </section>
  );
};

Experience.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Experience;
