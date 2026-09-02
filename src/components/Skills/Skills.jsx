import { skillGroups } from "../../data/portfolioData";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-tag">07 · Skills</span>
          <h2>My toolkit.</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.label}>
              <h3>{group.label}</h3>

              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
