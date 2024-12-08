import PropTypes from "prop-types";
import { colors, transition } from "../../constants";

const Footer = ({ isDarkMode }) => {
  const { background, text, accent } = isDarkMode ? colors.dark : colors.light;

  return (
    <footer className={`pt-14 pb-6 ${background} ${transition.duration}`}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className={`${text}`}>
            &copy; {new Date().getFullYear()} All rights reserved.
            <br />
            <span className={`${accent}`}>· Created by: Keyur Patel ·</span>
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Template licensed under CC BY 3.0
          </p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Footer;
