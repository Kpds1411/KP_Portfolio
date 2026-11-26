import PropTypes from "prop-types";
import {
  greetingMessage,
  ownerName,
  typoGraphyContent,
  colors,
  transition,
  heroProfileImage,
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
      <div className={`hero-content mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-6 md:items-start md:gap-x-12 ${text} ${transition.duration}`}>
        <div>
          <span className="subheading">{greetingMessage}</span>
          <h1 className={`mb-3 mt-3 font-bold ${heading}`}>
            <span>{ownerName}</span>
          </h1>
          <span className="block">{typoGraphyContent[0]}</span>
        </div>

        <div className="self-start justify-self-end p-1.5 sm:p-2 md:row-span-2">
          <img
            src={heroProfileImage}
            alt={ownerName}
            width="718"
            height="804"
            className="aspect-[4/5] w-24 object-contain object-right-top sm:w-36 md:w-56 lg:w-64"
          />
        </div>

        <div className="col-span-2 min-w-0 md:col-span-1">
          <div className="grid max-w-md grid-cols-4 gap-3 md:gap-4">
            {heroBadges.map((badge) => (
              <img
                key={badge.key}
                src={badge.image}
                alt={badge.title}
                title={badge.title}
                className="aspect-square w-full rounded-lg object-contain"
              />
            ))}
          </div>
          <div className="mt-6 flex max-w-xl items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm md:gap-3">
            {heroTools.map((tool) => (
              <img
                key={tool.key}
                src={tool.image}
                alt={tool.title}
                title={tool.title}
                style={{ flex: `${tool.ratio} 1 0%` }}
                className="h-auto min-w-0 object-contain"
              />
            ))}
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
