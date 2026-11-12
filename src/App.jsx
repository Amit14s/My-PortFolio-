import Home from "./components/home";
import Navbar from "./components/navbar";
import Skill from "./components/skill";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Education from "./components/education";

function App() {
  return (
    <div className="portfolio-shell relative min-h-screen">
      <Navbar />
      <main className="relative z-10">
        <Home />
      </main>
      <Skill />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
