import PropTypes from "prop-types";
import { colors, transition, educationData } from "../../constants";

const Education = ({ isDarkMode }) => {
  const { background, text, cardBackground, heading } = isDarkMode
    ? colors.dark
    : colors.light;

  return (
    <section className={`pt-20 ${background} ${transition.duration}`}>
      <div className="container mx-auto px-4">
        <div className="row justify-center mb-8">
          <div className="col-md-7 text-center">
            <h1
              className={`text-4xl font-bold ${heading} ${transition.duration}`}
            >
              Education
            </h1>
            {/* <p className={`text-lg mt-2.5 ${text} ${transition.duration}`}>
              Below are the details to reach out to me! Education
            </p> */}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {educationData.map((education, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl shadow-md hover:shadow-2xl ${cardBackground} ${text} ${transition.duration} transform hover:scale-105`}
            >
              <span className={`text-sm ${text}`}>{education.date}</span>
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

Education.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Education;
