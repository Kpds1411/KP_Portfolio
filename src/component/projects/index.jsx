import { useRef } from "react";
import PropTypes from "prop-types";
import { projectsData, colors, transition } from "../../constants";
import architectureDiagram from "../../assets/power-bi-architecture.png";

const Projects = ({ isDarkMode }) => {
  const diagramDialog = useRef(null);
  const { background, text, cardBackground, heading } = isDarkMode
    ? colors.dark
    : colors.light;

  return (
    <section className={`pt-20 ${background} ${transition.duration}`} id="projects-section">
      <div className="container mx-auto px-4">
        <h1 className={`mb-8 text-center text-4xl font-bold ${heading} ${transition.duration}`}>Key Projects</h1>
        <div className="mx-auto grid max-w-5xl gap-8">
          {projectsData.map((project, index) => (
            <article key={project.title} className={`space-y-8 rounded-xl p-5 shadow-md sm:p-8 ${cardBackground} ${text}`}>
              <h2 className="flex items-baseline gap-3 text-3xl font-bold tracking-tight">
                <span className="text-lg font-semibold tabular-nums opacity-75">{String(index + 1).padStart(2, "0")}.</span>
                <span>{project.title}</span>
              </h2>
              <figure className="w-full">
                <img src={architectureDiagram} alt="Power BI architecture from data sources and SQL Server transformation to a shared semantic model, embedded reports, automated refresh, and row-level security." className="block h-auto w-full" loading="lazy" />
                <figcaption className="mt-2 text-right">
                  <button type="button" onClick={() => diagramDialog.current.showModal()} className="text-sm font-semibold underline underline-offset-4">
                    Enlarge diagram
                  </button>
                </figcaption>
              </figure>
              <div className="space-y-7">
                <div>
                  <h3 className="mb-3 text-xl font-semibold">Key Skills &amp; Tools</h3>
                  <p>{project.tech.join(", ")}</p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Project Overview</h3>
                  <p className="leading-relaxed">{project.overview}</p>
                </div>
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
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Key Technical Highlights</h3>
                  <ul className="list-disc space-y-2 pl-6">
                    {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <dialog ref={diagramDialog} aria-label="Power BI architecture diagram" className="m-auto max-h-[90vh] w-[96vw] max-w-none rounded-xl bg-white p-4 text-slate-900 backdrop:bg-slate-950/80">
        <form method="dialog" className="mb-3 flex justify-end">
          <button className="rounded-md bg-slate-900 px-3 py-2 text-sm font-semibold text-white">Close diagram</button>
        </form>
        <div className="flex justify-center">
          <img src={architectureDiagram} alt="Full-size Power BI solution architecture diagram" className="max-h-[75vh] w-full object-contain" loading="lazy" />
        </div>
      </dialog>
    </section>
  );
};

Projects.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Projects;
