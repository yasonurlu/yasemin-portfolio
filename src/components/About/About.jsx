import "./About.css";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-tag">01 · About</span>
          <h2>Engineer first, with a maths brain.</h2>
        </div>

        <div className="about-grid">
          <div className="about-main">
            <p className="about-large">
              I'm a software engineer with a background in computer science and
              mathematics.
            </p>

            <p>
              I've worked on mobile apps, web products, and data systems. The
              problems I enjoy most are the ones where the engineering and the
              numbers meet, like keeping an app at 60 FPS while it pulls live
              stock prices every second.
            </p>

            <p>
              I'm currently doing an MSc in Financial Technology at UCL,
              focusing on how software and quantitative thinking power financial
              systems.
            </p>
          </div>

          <div className="about-note">
            <span className="about-note-label">Currently</span>

            <h3>Building toward fintech.</h3>

            <p>
              I want to work on financial infrastructure: the systems that turn
              messy market data into something people can actually use.
            </p>

            <div className="about-note-line" />

            <span className="about-note-location">London, UK · 2026–2027</span>
          </div>
        </div>
      </div>
    </section>
  );
}
