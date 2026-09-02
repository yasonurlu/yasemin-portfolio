import "./Leadership.css";

export default function Leadership() {
  return (
    <section id="leadership" className="section">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-tag">05 · Leadership</span>
          <h2>I care about the people around the work.</h2>
        </div>

        <div className="leadership-feature">
          <div className="leadership-side">
            <span className="leadership-symbol">∿</span>
            <span>2022 — 2026</span>
          </div>

          <div className="leadership-content">
            <p className="leadership-kicker">
              Association for Women in Mathematics
            </p>

            <h3>President</h3>

            <p>
              Led a seven-member executive board supporting 30+ members,
              directing programming, operations, and strategic initiatives
              around women's participation in STEM.
            </p>

            <p>
              Organized workshops, networking events, and an industry symposium
              featuring professionals from Apple and MathWorks, connecting
              students with research, internship, and graduate school
              opportunities.
            </p>
          </div>
        </div>

        <div className="badge-row">
          <span className="badge">Association for Women in Math</span>
          <span className="badge">Upsilon Pi Epsilon</span>
          <span className="badge">Omega Phi Alpha</span>
        </div>
      </div>
    </section>
  );
}
