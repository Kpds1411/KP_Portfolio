import PropTypes from "prop-types";
import { navOptions, navTitle, colors, transition } from "../../constants";
import { useState } from "react";

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const { background, text, link, button, buttonHover } = isDarkMode
    ? colors.dark
    : colors.light;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`w-full h-20 flex items-center justify-between px-8 lg:px-20 py-4 border-b-2 sticky top-0 z-10 ${background} transition-all ${transition.duration}`}
    >
      <div
        className={`text-2xl font-bold ${text} transition-all ${transition.duration}`}
      >
        {navTitle}
      </div>

      <ul
        className={`md:flex gap-x-5 ${
          isMobileMenuOpen
            ? `flex flex-col fixed top-20 right-0 w-full p-8 z-20 transition-all transform duration-300 ease-in-out items-center justify-center ${background} `
            : "hidden"
        } md:flex md:flex-row md:gap-0 md:items-center`}
      >
        {navOptions.map((option) => (
          <li
            key={option.key}
            className={`w-full py-3 px-4 text-lg font-semibold text rounded-md transition-all cursor-pointer ${transition.duration} text-center md:px-4 md:w-fit`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <a
              href={option.href}
              className={`${link} ${transition.duration}`}
              aria-label={option.title}
            >
              {option.title}
            </a>
          </li>
        ))}
      </ul>

      <button
        onClick={toggleTheme}
        className={`text-2xl p-2 border-none cursor-pointer transition-all ${transition.duration}`}
        aria-label="Toggle dark mode"
      >
        <i
          className={`!bg-transparent fas transition-all ${
            transition.duration
          } ${isDarkMode ? "fa-sun text-white" : "fa-moon text-black"} ${
            isDarkMode ? button : buttonHover
          }`}
        ></i>
      </button>

      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`text-2xl p-2 border-none cursor-pointer transition-all ${transition.duration}`}
          aria-label="Toggle mobile menu"
        >
          <i
            className={`!bg-transparent fas transition-all ${
              isDarkMode ? "text-white" : "text-black"
            } ${transition.duration} ${
              isMobileMenuOpen ? "fa-times" : "fa-bars"
            } ${isDarkMode ? button : buttonHover}`}
          ></i>
        </button>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default Navbar;
