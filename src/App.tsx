import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
      <div className="min-h-screen bg-background-color text-white overflow-hidden">
        <Navbar />
        <Hero />
      </div>
  );
}

export default App;
