import Home from "./components/home"
import Navbar from './components/navbar'
import Skill from "./components/skill"
import Projects from "./components/projects"
import Experience from "./components/experience"
import Contact from "./components/contact"
import Education from "./components/education"
function App() {

  return (
   <div
      className="
        relative
        min-h-screen
        bg-[#1b0826]
        bg-[radial-gradient(circle_at_75%_45%,rgba(168,60,210,0.45),transparent_70%),radial-gradient(circle_at_50%_50%,rgba(120,40,180,0.25),transparent_80%)]
      "
    >
      <Navbar />
      <main className="relative z-10">
        <Home />
      </main>
      <Skill/>
      <Projects/>
      <Experience/>
      <Education/>
      <Contact/>
    </div>
  )
}

export default App
