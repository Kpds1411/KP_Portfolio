import PropTypes from "prop-types";
import { projectsData, colors, transition } from "../../constants";

const Projects = ({ isDarkMode }) => {
  const { background, text, cardBackground, heading } = isDarkMode
    ? colors.dark
    : colors.light;

  return (
    <section className={`pt-20 ${background} ${transition.duration}`} id="projects-section">
      <div className="container mx-auto px-4">
        <h1 className={`mb-8 text-center text-4xl font-bold ${heading} ${transition.duration}`}>Projects</h1>
        <div className="mx-auto grid max-w-5xl gap-8">
          {projectsData.map((project, index) => (
            <details key={project.title} open={index === 0} className={`group rounded-xl p-5 shadow-md sm:p-8 ${cardBackground} ${text}`}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                <h2 className="flex items-baseline gap-3 text-3xl font-bold tracking-tight">
                  <span className="text-lg font-semibold tabular-nums opacity-75">{String(index + 1).padStart(2, "0")}.</span>
                  <span>{project.title}</span>
                </h2>
                <span aria-hidden="true" className="shrink-0 text-sm group-open:rotate-180">▾</span>
              </summary>
              <div className="mt-6 space-y-8">
                <figure className="w-full">
                  <img src={project.diagram} alt={project.diagramAlt} className="block h-auto w-full" loading="lazy" />
                </figure>
                <div className="space-y-7 empty:hidden">
                  {project.tech?.length > 0 && (
                    <div>
                      <h3 className="mb-3 text-xl font-semibold">Key Skills &amp; Tools</h3>
                      <ul className="flex flex-wrap gap-2">
                        {project.tech.map((skill) => (
                          <li key={skill} className="rounded-full bg-[#e3eee6] px-3 py-1 text-sm font-medium text-[#174b39]">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project.overview && (
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Project Overview</h3>
                      <p className="leading-relaxed">{project.overview}</p>
                    </div>
                  )}
                  {project.architecture?.length > 0 && (
                    <div>
                      <h3 className="mb-3 text-xl font-semibold">Architecture Explanation</h3>
                      <ol className="list-decimal space-y-4 pl-6 marker:font-semibold">
                        {project.architecture.map(({ title, body, details }) => (
                          <li key={title}>
                            <h4 className="mb-1 font-semibold">{title}</h4>
                            <p>{body}</p>
                            {details && (
                              <ul className="mt-2 list-disc space-y-2 pl-5">
                                {details.map(([label, description]) => (
                                  <li key={label}><strong>{label}:</strong> {description}</li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                  {project.highlights?.length > 0 && (
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Key Technical Highlights</h3>
                      <ul className="list-disc space-y-2 pl-6">
                        {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </details>
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
