import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Leadership from "./components/Leadership/Leadership";
import Interests from "./components/Interests/Interests";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <div className="page">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Leadership />
        <Interests />
        <Skills />
        <Contact />
      </main>

      <footer className="footer">
        <p>Built by Yasemin Nurluoglu · 2026</p>
      </footer>
    </div>
  );
}
