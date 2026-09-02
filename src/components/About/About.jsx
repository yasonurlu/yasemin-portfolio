import "./About.css";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-tag">01 · About</span>
          <h2>I like the space between disciplines.</h2>
        </div>

        <div className="about-grid">
          <div className="about-main">
            <p className="about-large">
              I'm a software engineer with a background in computer science,
              mathematics, and financial analysis.
            </p>

            <p>
              I've worked across mobile applications, web products, financial
              technology, and data systems. What interests me most is the space
              where those areas overlap — where technical decisions have a real
              effect on products and people.
            </p>

            <p>
              I'm currently pursuing an MSc in Financial Technology at UCL,
              continuing to explore how software, mathematics, and financial
              systems can work together.
            </p>
          </div>

          <div className="about-note">
            <span className="about-note-label">Currently</span>

            <h3>Building toward fintech.</h3>

            <p>
              I'm particularly interested in software engineering, financial
              infrastructure, data-intensive systems, and products that make
              complex information easier to understand.
            </p>

            <div className="about-note-line" />

            <span className="about-note-location">London, UK · 2026–2027</span>
          </div>
        </div>
      </div>
    </section>
  );
}
