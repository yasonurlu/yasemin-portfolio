import { useState } from "react";
import "./Navbar.css";

const links = [
  ["about", "About"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["education", "Education"],
  ["leadership", "Leadership"],
  ["interests", "Interests"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="nav">
      <a className="nav-brand" href="#top">
        YN
      </a>

      <nav className={`nav-links ${open ? "open" : ""}`}>
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={closeMenu}>
            {label}
          </a>
        ))}

        <a className="nav-cta" href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>

      <button
        className="nav-toggle"
        aria-label="Toggle navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
