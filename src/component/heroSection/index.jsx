import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import {
  greetingMessage,
  heroProfileImage,
  ownerName,
  typoGraphyContent,
  colors,
  transition,
  heroBadges,
  heroTools,
} from "../../constants";

const HeroSection = ({ isDarkMode }) => {
  const typingAnimationElement = useRef(null);
  // Always-incrementing cycle counter. Using `(prev + 1) % length` directly
  // breaks when there is only one phrase: it stays 0, React skips the update,
  // and the animation never replays.
  const [typingCycle, setTypingCycle] = useState(0);
  const typingIndex = typingCycle % typoGraphyContent.length;

  const { background, text, heading } = isDarkMode ? colors.dark : colors.light;

  useEffect(() => {
    let intervalId;
    let timeoutId;
    const playTypingAnimation = (text) => {
      let charIndex = 0;
      intervalId = setInterval(() => {
        if (typingAnimationElement.current) {
          typingAnimationElement.current.textContent += text[charIndex];
        }
        charIndex++;
        if (charIndex === text.length) {
          clearInterval(intervalId);
          timeoutId = setTimeout(() => {
            if (typingAnimationElement.current) {
              typingAnimationElement.current.textContent = "";
            }
            setTypingCycle((prev) => prev + 1);
          }, 1000);
        }
      }, 200);
    };

    if (typingAnimationElement.current) {
      typingAnimationElement.current.textContent = "";
      playTypingAnimation(typoGraphyContent[typingIndex]);
    }

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [typingCycle, typingIndex]);

  return (
    <section
      id="home-section"
      className={`hero bg-cover bg-center relative ${background} transition-all ${transition.duration}`}
    >
      <div
        className={`home-slider h-full flex items-center justify-center ${background} transition-all ${transition.duration}`}
      >
        <div className="slider-item w-full h-full flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col justify-center p-10 md:p-20">
            <div className={`${text} transition-all ${transition.duration}`}>
              <span className="subheading text-2xl">{greetingMessage}</span>
              <h1
                className={`text-4xl md:text-6xl mb-4 mt-3 font-bold ${heading}`}
              >
                <span className={`${text}`}>{ownerName}</span>
              </h1>
              <span
                ref={typingAnimationElement}
                className="text-2xl md:text-4xl block min-h-[32px] md:min-h-[40px]"
                aria-label="Typing animation"
              ></span>
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
          <div
            className={`w-full md:w-1/2 md:mt-10 flex justify-center bg-cover bg-center h-80 md:h-full`}
          >
            <img
              src={heroProfileImage}
              alt="Keyur Patel"
              // White outline traced around the transparent cutout plus a
              // soft shadow so the photo stands out. No downward outline/shadow:
              // the photo is cut flat at the bottom, so it would draw a line there.
              className="object-contain w-[55%] max-w-[440px] h-auto self-center [filter:drop-shadow(3px_0_0_#fff)_drop-shadow(-3px_0_0_#fff)_drop-shadow(0_-3px_0_#fff)_drop-shadow(0_-4px_12px_rgba(0,0,0,0.2))]"
            />
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
