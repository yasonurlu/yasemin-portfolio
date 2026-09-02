import { useEffect, useRef, useState } from "react";

const roles = [
  "Software Engineer",
  "FinTech Builder",
  "Mathematics + CS",
  "Product-Minded Engineer",
];

const experience = [
  {
    org: "ForInvest",
    role: "Software Engineering Intern",
    place: "Istanbul, Turkey",
    time: "June – July 2026",
    bullets: [
      "Engineered a real-time stock monitoring system polling REST APIs every second while maintaining a smooth 60 FPS UI using Kotlin Coroutines and StateFlow.",
      "Migrated the app's UI from XML/Views to Jetpack Compose, replacing custom components with declarative composables.",
      "Designed a sealed-class state model to unify loading, error, and success states across the application.",
    ],
  },
  {
    org: "Department of Mathematics & Computer Science, Boston University",
    role: "Grader & Course Assistant",
    place: "Boston, MA",
    time: "Sept 2025 – May 2026",
    bullets: [
      "Evaluated coursework and provided feedback for 230+ students across Elementary Statistics, Mathematical Statistics, and Internet Technologies & Web Programming.",
      "Co-led CS103 discussion sections, teaching HTML, CSS, and JavaScript while mentoring students through debugging and frontend best practices.",
    ],
  },
  {
    org: "Ringlet",
    role: "Software Engineer Intern",
    place: "Boston, MA",
    time: "June – August 2025",
    bullets: [
      "Delivered cross-platform mobile features in React Native and TypeScript, shipping production functionality to iOS and Android.",
      "Designed backend APIs and frontend flows from user feedback, improving friend discovery and event-planning experiences.",
      "Built end-to-end test infrastructure with Maestro and debugged performance across iOS and web.",
      "Worked in two-week agile sprints, demoing work directly to engineers and co-founders.",
    ],
  },
  {
    org: "Istanbul Portfoy",
    role: "Financial Analyst Intern",
    place: "Istanbul, Turkey",
    time: "Dec 2024 – Jan 2025",
    bullets: [
      "Analyzed 15+ investment portfolios, evaluating asset allocation, risk exposure, and performance.",
      "Monitored market trends through Bloomberg Terminal, supporting a team handling 100M+ in daily transactions.",
      "Assessed financials of companies with 500M+ in annual revenue to support investment strategy.",
    ],
  },
];

const projects = [
  {
    name: "Market Data Engine",
    stack: "Python · asyncio · SQLite · pytest",
    accent: "sand",
    url: "https://github.com/yasonurlu/market-data-engine",
    linkText: "View on GitHub ↗",
    description:
      "An asynchronous market-data pipeline designed to ingest, process, and persist high-frequency financial data reliably.",
    points: [
      "Built a modular producer/consumer architecture with concurrent API ingestion and bounded queues for backpressure.",
      "Implemented in-memory per-symbol statistics with asynchronous SQLite persistence and indexed time-range queries.",
      "Added API retry logic with exponential backoff and typed async interfaces, covered by pytest.",
    ],
  },
  {
    name: "Portfolio Tracker",
    stack: "Python · FastAPI · React · SQLite",
    accent: "peach",
    url: "https://github.com/yasonurlu/portfolio-tracker",
    linkText: "View on GitHub ↗",
    description:
      "A full-stack investment portfolio application for tracking holdings, market data, and portfolio performance.",
    points: [
      "Built a REST API for portfolio management and financial data retrieval.",
      "Connected market data to a responsive React frontend for real-time portfolio insights.",
      "Designed modular backend services and persistent storage around a clean application architecture.",
    ],
  },
  {
    name: "HobbyHabit",
    stack: "Kotlin · Jetpack Compose · MVVM",
    accent: "olive",
    url: "https://github.com/mdiazgar/HobbyHabit",
    linkText: "View on GitHub ↗",
    description:
      "An Android habit-tracking application combining activity tracking with location-based event discovery.",
    points: [
      "Built the application using MVVM, Room, Retrofit, Coroutines, and StateFlow.",
      "Integrated the Ticketmaster API for location-based event discovery with local persistence.",
      "Implemented streak analytics, calendar views, and activity history using Kotlin Flow.",
    ],
  },
  {
    name: "Sanvia",
    stack: "React · TypeScript · Vite",
    accent: "brown",
    url: "https://sanvia.app/",
    linkText: "Visit Sanvia ↗",
    description:
      "An AI-powered health application where I built responsive product interfaces as part of a fast-moving development team.",
    points: [
      "Built core interfaces including the landing page, profile experience, and AI chat.",
      "Integrated OpenAI and Firebase APIs into a responsive frontend experience.",
      "Worked closely with backend engineers and designers to iterate and ship product features quickly.",
    ],
  },
];

const skillGroups = [
  {
    label: "Frontend",
    items: ["React", "TypeScript", "React Native", "JavaScript", "HTML/CSS"],
  },
  {
    label: "Backend & Data",
    items: ["Python", "FastAPI", "SQL", "REST APIs", "Firebase"],
  },
  {
    label: "Mobile & Systems",
    items: [
      "Kotlin",
      "Jetpack Compose",
      "Coroutines",
      "StateFlow",
      "Docker",
      "Git",
    ],
  },
];

function useRotatingWord(words, intervalMs = 2400) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, intervalMs);

    return () => clearInterval(id);
  }, [words, intervalMs]);

  return words[index];
}

function useOnScreen(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        obs.unobserve(el);
      }
    }, options);

    obs.observe(el);

    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ children, className = "" }) {
  const [ref, visible] = useOnScreen();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

function Section({ id, eyebrow, title, children, tint = false }) {
  return (
    <section id={id} className={`section ${tint ? "section--tint" : ""}`}>
      <div className="section-inner">
        <Reveal className="section-head">
          <span className="section-tag">{eyebrow}</span>
          <h2>{title}</h2>
        </Reveal>

        {children}
      </div>
    </section>
  );
}

function ProjectCarousel() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [dragStart, setDragStart] = useState(null);

  const next = () => {
    setActive((current) => (current + 1) % projects.length);
  };

  const previous = () => {
    setActive((current) => (current - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActive((current) => (current + 1) % projects.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePointerDown = (event) => {
    setDragStart(event.clientX);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event) => {
    if (dragStart === null) return;

    const distance = event.clientX - dragStart;

    if (Math.abs(distance) > 50) {
      if (distance < 0) {
        next();
      } else {
        previous();
      }
    }

    setDragStart(null);
  };

  const getPosition = (index) => {
    const offset = (index - active + projects.length) % projects.length;

    if (offset === 0) return "center";
    if (offset === 1) return "right";
    if (offset === projects.length - 1) return "left";

    return "hidden";
  };

  return (
    <div
      className="project-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="project-orbit"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        {projects.map((project, index) => {
          const position = getPosition(index);

          return (
            <article
              key={project.name}
              className={`project-card project-card--${project.accent} project-card--${position}`}
            >
              <div className="project-number">0{index + 1}</div>

              <div className="project-title-row">
                <div>
                  <h3>{project.name}</h3>

                  <p className="project-stack">{project.stack}</p>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                  onPointerDown={(e) => e.stopPropagation()}
                >
                  ↗
                </a>
              </div>

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
                className="project-view"
                onPointerDown={(e) => e.stopPropagation()}
              >
                {project.linkText}
              </a>
            </article>
          );
        })}
      </div>

      <div className="project-controls">
        <button onClick={previous} aria-label="Previous project">
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

        <button onClick={next} aria-label="Next project">
          →
        </button>
      </div>

      <p className="project-hint">Hover to pause · drag to explore</p>
    </div>
  );
}

export default function App() {
  const role = useRotatingWord(roles);
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => setNavOpen(false);

  return (
    <div className="page">
      {/* NAVIGATION */}
      <header className="nav">
        <a className="nav-brand" href="#top">
          YN
        </a>

        <nav className={`nav-links ${navOpen ? "open" : ""}`}>
          <a href="#about" onClick={closeNav}>
            About
          </a>

          <a href="#experience" onClick={closeNav}>
            Experience
          </a>

          <a href="#projects" onClick={closeNav}>
            Projects
          </a>

          <a href="#education" onClick={closeNav}>
            Education
          </a>

          <a href="#leadership" onClick={closeNav}>
            Leadership
          </a>

          <a className="nav-cta" href="#contact" onClick={closeNav}>
            Contact
          </a>
        </nav>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setNavOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* HERO */}
      <section id="top" className="hero">
        <div className="hero-blob" aria-hidden="true" />

        <div className="hero-grid-pattern" aria-hidden="true">
          <span>∑</span>
          <span>π</span>
          <span>01</span>
          <span>∞</span>
          <span>f(x)</span>
        </div>

        <div className="hero-inner">
          <p className="hero-kicker">Hi, I'm</p>

          <h1>Yasemin Nurluoglu</h1>

          <p className="hero-role">
            <span className="hero-role-word" key={role}>
              {role}
            </span>
          </p>

          <p className="hero-desc">
            I build software at the intersection of engineering, mathematics,
            and financial technology — from production mobile applications to
            asynchronous market-data systems.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              See my work
            </a>

            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
          </div>

          <div className="currently">
            <span>Currently</span>
            <strong>MSc Financial Technology @ UCL</strong>
            <span>·</span>
            <span>London</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section
        id="about"
        eyebrow="About"
        title="A technical mind with a curiosity for how things work"
      >
        <Reveal>
          <div className="about-grid">
            <p className="about-text">
              I'm a Computer Science and Mathematics graduate from Boston
              University, currently pursuing an MSc in Financial Technology at
              UCL. I've worked across mobile development, web applications,
              financial analysis, and data-intensive systems.
            </p>

            <p className="about-text">
              I enjoy problems that require both precision and creativity:
              understanding a system deeply, figuring out how to make it better,
              and then actually building the solution. I'm particularly
              interested in software engineering, financial technology, and
              products that turn complex information into something useful.
            </p>

            <div className="about-interests">
              <span>Mathematics</span>
              <span>Financial Markets</span>
              <span>Games & Puzzles</span>
              <span>Travel</span>
              <span>Art & History</span>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* EXPERIENCE */}
      <Section
        id="experience"
        eyebrow="Experience"
        title="Where I've worked"
        tint
      >
        <div className="timeline">
          {experience.map((job) => (
            <Reveal key={`${job.org}-${job.role}`} className="timeline-item">
              <div className="timeline-dot" />

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
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" eyebrow="Selected Work" title="Things I've built">
        <Reveal>
          <ProjectCarousel />
        </Reveal>
      </Section>

      {/* EDUCATION */}
      <Section id="education" eyebrow="Education" title="Education" tint>
        <div className="edu-grid">
          <Reveal className="edu-card">
            <p className="edu-time">Expected August 2027</p>

            <h3>MSc Financial Technology</h3>

            <p className="edu-school">University College London · London, UK</p>
          </Reveal>

          <Reveal className="edu-card">
            <p className="edu-time">May 2026</p>

            <h3>BA Computer Science &amp; BA Mathematics</h3>

            <p className="edu-school">
              Boston University · Boston, MA · GPA 3.63
            </p>
          </Reveal>
        </div>
      </Section>

      {/* LEADERSHIP */}
      <Section id="leadership" eyebrow="Leadership" title="Beyond engineering">
        <Reveal>
          <div className="leadership-feature">
            <div className="leadership-label">Leadership</div>

            <h3>President, Association for Women in Mathematics</h3>

            <p className="leadership-time">Boston University · 2022–2026</p>

            <p>
              Led a 7-member executive board supporting 30+ members through
              workshops, networking events, and industry programming connecting
              students with opportunities in research, internships, and graduate
              study.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="badge-row">
            <span className="badge">Association for Women in Math</span>

            <span className="badge">Upsilon Pi Epsilon</span>

            <span className="badge">Omega Phi Alpha</span>
          </div>
        </Reveal>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="Technologies" title="What I work with" tint>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <Reveal key={group.label} className="skill-group">
              <h3>{group.label}</h3>

              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <Reveal className="contact-inner">
          <p className="contact-kicker">What's next?</p>

          <h2>Have an interesting problem?</h2>

          <p>
            I'm interested in thoughtful people, ambitious products, and
            technically interesting problems. If you're building something
            interesting, I'd love to hear about it.
          </p>

          <div className="contact-links">
            <a
              className="btn btn-primary"
              href="mailto:yaseminnurluoglu@icloud.com"
            >
              Email me
            </a>

            <a
              className="btn btn-ghost"
              href="https://linkedin.com/in/yasemin-nurluoglu/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              className="btn btn-ghost"
              href="https://github.com/yasonurlu"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>Built by Yasemin Nurluoglu · {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
