import { experience } from "../../data/portfolioData";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section section--tint">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-tag">02 · Experience</span>
          <h2>Across software, products &amp; finance.</h2>
        </div>

        <div className="timeline">
          {experience.map((job, index) => (
            <article className="timeline-item" key={job.org}>
              <div className="timeline-marker">
                <span>0{index + 1}</span>
              </div>

              <div className="timeline-card">
                <div className="timeline-head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="timeline-org">{job.org}</p>
                  </div>

                  <div className="timeline-meta">
                    <span>{job.time}</span>
                    <span>{job.place}</span>
                  </div>
                </div>

                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
