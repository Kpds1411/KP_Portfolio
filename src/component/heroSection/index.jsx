import PropTypes from "prop-types";
import {
  greetingMessage,
  ownerName,
  typoGraphyContent,
  colors,
  transition,
  heroBadges,
  heroTools,
} from "../../constants";

const HeroSection = ({ isDarkMode }) => {
  const { background, text, heading } = isDarkMode ? colors.dark : colors.light;

  return (
    <section
      id="home-section"
      className={`hero bg-cover bg-center relative ${background} transition-all ${transition.duration}`}
    >
      <div
        className={`home-slider h-full flex items-center justify-center ${background} transition-all ${transition.duration}`}
      >
        <div className="slider-item w-full h-full flex flex-col md:flex-row">
          <div className="w-full flex flex-col justify-center p-10 md:p-20">
            <div className={`${text} transition-all ${transition.duration}`}>
              <span className="subheading text-2xl">{greetingMessage}</span>
              <h1
                className={`text-4xl md:text-6xl mb-4 mt-3 font-bold ${heading}`}
              >
                <span className={`${text}`}>{ownerName}</span>
              </h1>
              <span className="block text-2xl md:text-4xl">{typoGraphyContent[0]}</span>
              <div className="grid grid-cols-4 gap-3 md:gap-4 mt-6 max-w-md">
                {heroBadges.map((badge) => (
                  <img
                    key={badge.key}
                    src={badge.image}
                    alt={badge.title}
                    title={badge.title}
                    className="w-full aspect-square object-contain rounded-lg"
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 md:gap-3 mt-6 max-w-xl bg-white rounded-lg px-3 py-2 shadow-sm">
                {heroTools.map((tool) => (
                  <img
                    key={tool.key}
                    src={tool.image}
                    alt={tool.title}
                    title={tool.title}
                    style={{ flex: `${tool.ratio} 1 0%` }}
                    className="min-w-0 h-auto object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default HeroSection;
