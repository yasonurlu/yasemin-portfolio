import { useEffect, useState } from "react";
import { projects } from "../../data/portfolioData";

import "./Projects.css";

export default function Projects() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () => {
    setActive((current) => (current + 1) % projects.length);
  };

  const previous = () => {
    setActive((current) => (current - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(next, 5000);

    return () => clearInterval(interval);
  }, [paused]);

  const getProject = (offset) => {
    return projects[(active + offset + projects.length) % projects.length];
  };

  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <div className="section-head project-section-head">
          <div>
            <span className="section-tag">03 · Projects</span>
            <h2>A few things I've built.</h2>
          </div>

          <p className="section-subtitle">
            Systems, products, and experiments across software and finance.
          </p>
        </div>

        <div
          className="project-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {[-1, 0, 1].map((offset) => {
            const project = getProject(offset);

            return (
              <article
                key={`${project.name}-${offset}`}
                className={`project-card project-card--${project.tone} project-slot ${
                  offset === 0
                    ? "project-slot--active"
                    : offset === -1
                      ? "project-slot--left"
                      : "project-slot--right"
                }`}
              >
                <div className="project-number">
                  {String(
                    ((active + offset + projects.length) % projects.length) + 1,
                  ).padStart(2, "0")}
                </div>

                <div className="project-title-row">
                  <h3>{project.name}</h3>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    {project.linkText}
                  </a>
                </div>

                <p className="project-stack">{project.stack}</p>

                <p className="project-desc">{project.description}</p>

                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card-footer"
                >
                  <span>View project</span>
                  <span>↗</span>
                </a>
              </article>
            );
          })}
        </div>

        <div className="project-controls">
          <button
            onClick={previous}
            aria-label="Previous project"
            className="carousel-arrow"
          >
            ←
          </button>

          <div className="project-dots">
            {projects.map((project, index) => (
              <button
                key={project.name}
                className={index === active ? "active" : ""}
                onClick={() => setActive(index)}
                aria-label={`Show ${project.name}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next project"
            className="carousel-arrow"
          >
            →
          </button>
        </div>

        <p className="carousel-hint">
          Use the arrows to explore · pauses on hover
        </p>
      </div>
    </section>
  );
}
