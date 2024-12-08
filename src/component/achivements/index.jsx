import PropTypes from "prop-types";
import { achivementData, colors, transition } from "../../constants";

const Achivements = ({ isDarkMode }) => {
  const { background, text, cardBackground, heading } = isDarkMode
    ? colors.dark
    : colors.light;

  return (
    <section
      className={`pt-20 ${background} ${transition.duration}`}
      id="achivements-section"
    >
      <div className="container mx-auto px-4">
        <div className="row justify-center mb-8">
          <div className="col-md-7 text-center">
            <h1
              className={`text-4xl font-bold ${heading} ${transition.duration}`}
            >
              Achivements
            </h1>
            <p className={`text-lg mt-2.5 ${text} ${transition.duration}`}>
              Below are the details to reach out to me! Achivements
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {achivementData.map((achivement) => (
            <div
              key={achivement.key}
              className={`p-8 rounded-xl shadow-md hover:shadow-2xl ${cardBackground} ${text} ${transition.duration} transform hover:scale-105`}
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

Achivements.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Achivements;
