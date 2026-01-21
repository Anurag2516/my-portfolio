import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects/Projects";
import Skills from "../sections/Skills/Skills";
import Footer from "../components/Footer";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
