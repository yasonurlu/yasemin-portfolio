import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <span className="section-tag">08 · Contact</span>

        <h2>Let's build something.</h2>

        <p>
          I'm interested in software engineering, fintech, and interesting
          problems somewhere in between.
        </p>

        <div className="contact-links">
          <a
            className="btn btn-light"
            href="mailto:yaseminnurluoglu@icloud.com"
          >
            Email me ↗
          </a>

          <a
            className="btn btn-outline-light"
            href="https://linkedin.com/in/yasemin-nurluoglu/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            className="btn btn-outline-light"
            href="https://github.com/yasonurlu"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
