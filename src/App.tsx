import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";

function App() {
  return (
    <div className="min-h-screen bg-background-color text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
