import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section section--tint">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-tag">04 · Education</span>
          <h2>The foundations.</h2>
        </div>

        <div className="edu-grid">
          <article className="edu-card edu-card--current">
            <span className="edu-label">Current</span>
            <p className="edu-time">Expected August 2027</p>

            <h3>MSc Financial Technology</h3>

            <p className="edu-school">
              University College London
              <br />
              London, UK
            </p>
          </article>

          <article className="edu-card">
            <span className="edu-label">Completed</span>
            <p className="edu-time">May 2026</p>

            <h3>BA Computer Science &amp; Mathematics</h3>

            <p className="edu-school">
              Boston University
              <br />
              Boston, MA · GPA 3.63
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
