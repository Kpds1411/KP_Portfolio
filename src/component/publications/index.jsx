import PropTypes from "prop-types";
import { publicationsData, colors, transition } from "../../constants";

const Publications = ({ isDarkMode }) => {
  const { background, text, heading } = isDarkMode
    ? colors.dark
    : colors.light;

  const divider = isDarkMode ? "border-gray-700" : "border-gray-200";
  const muted = isDarkMode ? "text-gray-500" : "text-gray-400";
  const rowHover = isDarkMode ? "hover:bg-gray-800" : "hover:bg-white";

  return (
    <section
      className={`pt-20 ${background} ${transition.duration}`}
      id="publications-section"
    >
      <div className="container mx-auto px-4">
        <div className="row justify-center mb-8">
          <div className="col-md-7 text-center">
            <h1
              className={`text-4xl font-bold ${heading} ${transition.duration}`}
            >
              Publications
            </h1>
          </div>
        </div>

        <ol className={`max-w-4xl mx-auto border-t ${divider}`}>
          {publicationsData.map((publication, index) => (
            <li key={publication.key} className={`border-b ${divider}`}>
              <a
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 md:gap-6 px-2 md:px-4 py-5 rounded-lg ${text} ${rowHover} transition-colors ${transition.duration}`}
              >
                <span
                  className={`shrink-0 w-8 font-mono text-sm md:text-base ${muted} group-hover:text-blue-600 transition-colors ${transition.duration}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`flex-1 text-base md:text-lg font-medium leading-snug group-hover:text-blue-600 transition-colors ${transition.duration}`}
                >
                  {publication.title}
                </span>
                <i
                  className={`fas fa-arrow-right shrink-0 ${muted} group-hover:text-blue-600 group-hover:translate-x-1 transition-all ${transition.duration}`}
                  aria-hidden="true"
                ></i>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

Publications.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Publications;
