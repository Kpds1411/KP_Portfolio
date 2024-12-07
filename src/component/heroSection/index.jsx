import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import {
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

  const { background, text, heading } = isDarkMode ? colors.dark : colors.light;

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
      className={`hero sm:h-screen bg-cover bg-center relative ${background} transition-all ${transition.duration}`}
    >
      <div
        className={`home-slider h-full flex items-center justify-center ${background} transition-all ${transition.duration}`}
      >
        <div className="slider-item w-full h-full relative flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col justify-center p-10 md:p-20">
            <div className={`${text} transition-all ${transition.duration}`}>
              <span className="subheading text-lg">{greetingMessage}</span>
              <h1
                className={`text-4xl md:text-6xl mb-4 mt-3 font-bold ${heading}`}
              >
                {ownerName}
              </h1>
              <span
                ref={typingAnimationElement}
                className="text-3xl block h-[32px]"
                aria-label="Typing animation"
              ></span>
            </div>
          </div>
          {/* w-full md:w-1/2 object-fill md:h-full  flex items-center justify-center overflow-hidden */}
          <div className="w-full md:w-1/2 h-64 md:h-full relative flex items-center justify-center">
            <img className="p-14" src={heroProfileImage} alt="" />
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
