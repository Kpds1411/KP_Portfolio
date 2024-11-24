import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import {
  currentRole,
  greetingMessage,
  heroProfileImage,
  ownerName,
  typoGraphyContent,
  colors,
  transition,
} from "../../constants";

const HeroSection = ({ isDarkMode }) => {
  const typingAnimationElement = useRef(null);
  const [typingIndex, setTypingIndex] = useState(0);

  const { background, text, heading, cardBackground } = isDarkMode
    ? colors.dark
    : colors.light;

  useEffect(() => {
    let intervalId;
    const playTypingAnimation = (text) => {
      let charIndex = 0;
      intervalId = setInterval(() => {
        if (typingAnimationElement.current) {
          typingAnimationElement.current.textContent += text[charIndex];
        }
        charIndex++;
        if (charIndex === text.length) {
          clearInterval(intervalId);
          setTimeout(() => {
            if (typingAnimationElement.current) {
              typingAnimationElement.current.textContent = "";
            }
            setTypingIndex((prev) => (prev + 1) % typoGraphyContent.length);
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
    };
  }, [typingIndex]);

  return (
    <section
      id="home-section"
      className={`hero h-screen bg-cover bg-center relative ${background} transition-all ${transition.duration}`}
    >
      <div
        className={`home-slider h-full flex items-center justify-center ${background} transition-all ${transition.duration}`}
      >
        <div className="slider-item w-full h-full relative flex flex-col md:flex-row">
          {/* Left Section: Text Content */}
          <div className="w-full md:w-2/3 flex flex-col justify-center p-10 md:p-20">
            <div className={`${text} transition-all ${transition.duration}`}>
              <span className="subheading text-lg">{greetingMessage}</span>
              <h1
                className={`text-4xl md:text-6xl mb-4 mt-3 font-bold ${heading}`}
              >
                I&apos;m <span className={`${text}`}>{ownerName}</span>
              </h1>
              <span
                ref={typingAnimationElement}
                className="text-2xl block h-[32px]"
                aria-label="Typing animation"
              ></span>
              <br />
              <h2 className={`text-2xl md:text-3xl mt-4 ${heading}`}>
                {currentRole}
              </h2>
            </div>
          </div>

          {/* Right Section: Profile Image */}
          <div
            className={`w-full md:w-1/3 bg-cover bg-center h-64 md:h-full relative ${cardBackground}`}
            style={{ backgroundImage: `url(${heroProfileImage})` }}
          >
            <div
              className={`overlay absolute inset-0 ${background} opacity-50 transition-all ${transition.duration}`}
            ></div>
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
