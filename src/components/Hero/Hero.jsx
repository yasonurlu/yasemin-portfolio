import { useEffect, useState } from "react";
import { roles } from "../../data/portfolioData";
import "./Hero.css";
import yaseminPhoto from "../../components/assets/yaso.jpg";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" className="hero">
      <div className="hero-decoration hero-decoration--one" />
      <div className="hero-decoration hero-decoration--two" />

      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-kicker">Hi, I'm Yasemin.</p>

          <h1>
            I build software
            <br />
            <span>at the intersection</span>
            <br />
            of code &amp; finance.
          </h1>

          <div className="hero-role">
            <span>Currently:</span>
            <strong key={roles[roleIndex]}>{roles[roleIndex]}</strong>
          </div>

          <p className="hero-desc">
            Computer scientist and mathematician building products, systems, and
            financial technology. I like difficult problems, thoughtful
            interfaces, and understanding how things work underneath.
          </p>

          <div className="hero-meta">
            <span>London</span>
            <span>UCL MSc Financial Technology</span>
          </div>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              See my work
            </a>

            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <img src={yaseminPhoto} alt="Yasemin Nurluoglu" />
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <span className="hero-scroll-line" />
      </div>
    </section>
  );
}
