import { interests } from "../../data/portfolioData";
import "./Interests.css";

export default function Interests() {
  return (
    <section id="interests" className="section section--tint">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-tag">06 · Outside the code</span>
          <h2>Things I find interesting.</h2>
        </div>

        <div className="interests-grid">
          {interests.map((interest) => (
            <article className="interest-card" key={interest.title}>
              <span className="interest-symbol">{interest.symbol}</span>

              <h3>{interest.title}</h3>

              <p>{interest.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
