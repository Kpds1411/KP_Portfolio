import PropTypes from "prop-types";
import { colors, transition, certificationsData } from "../../constants";
export const Certifications = ({ isDarkMode }) => {
  const { background, text, cardBackground, heading } = isDarkMode
    ? colors.dark
    : colors.light;

  return (
    <section
      className={`pt-16 ${background} ${transition.duration}`}
      id="certifications-section"
    >
      <div className="container mx-auto px-4">
        <div className="row justify-center mb-8">
          <div className="col-md-7 text-center">
            <h1
              className={`text-4xl font-bold ${heading} ${transition.duration}`}
            >
              Certifications
            </h1>
            <p className={`text-lg mt-2.5 ${text} ${transition.duration}`}>
              Below are the details to reach out to me! Certifications
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {certificationsData.map((achivement) => (
            <div
              key={achivement.key}
              className={`w-[604px] p-8 rounded-xl shadow-md hover:shadow-2xl ${cardBackground} ${text} ${transition.duration} transform hover:scale-105`}
            >
              <img src={achivement.imageUrl} alt="" className="rounded-lg" />
              <p className="mt-5">{achivement.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Certifications.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Certifications;
