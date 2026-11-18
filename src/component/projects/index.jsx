import PropTypes from "prop-types";
import { projectsData, colors, transition } from "../../constants";

const Projects = ({ isDarkMode }) => {
  const { background, text, cardBackground, heading } = isDarkMode
    ? colors.dark
    : colors.light;

  return (
    <section
      className={`pt-20 ${background} ${transition.duration}`}
      id="projects-section"
    >
      <div className="container mx-auto px-4">
        <div className="row justify-center mb-8">
          <div className="col-md-7 text-center">
            <h1
              className={`text-4xl font-bold ${heading} ${transition.duration}`}
            >
              Key Projects
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((project) => (
            <div
              key={project.key}
              className={`p-8 rounded-xl h-fit shadow-md hover:shadow-2xl ${cardBackground} ${text} ${transition.duration} transform hover:scale-105`}
            >
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <span className={`font-medium block mt-1 ${text}`}>
                Role: {project.role}
              </span>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-3 py-1 rounded-full bg-blue-600 text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                {project.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Projects.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Projects;
