import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education/>
      <Contact />
      <Footer />
      <button
        onClick={scrollTop}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </div>
  );
}

export default App;
