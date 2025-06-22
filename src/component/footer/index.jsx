import PropTypes from "prop-types";
import { colors, transition } from "../../constants";

const Footer = ({ isDarkMode }) => {
  const { background, text, accent, link } = isDarkMode
    ? colors.dark
    : colors.light;

  return (
    <footer className={`pt-14 pb-6 ${background} ${transition.duration}`}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className={`${text}`}>
            &copy; {new Date().getFullYear()} All rights reserved.
            <br />
            <div className={`${accent} flex justify-center items-center`}>
              Created by:{" "}
              <a
                href={"https://www.linkedin.com/in/aakashprajapati1001/"}
                className={`${link} hover:underline`}
                target="_blank"
              >
                &nbsp;Aakash Prajapati
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Footer;
