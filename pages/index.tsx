import Header from "../components/Sections/Header";
import Navbar from "../components/Sections/NavBar";
import Intro from "../components/Sections/Intro";
import About from "../components/Sections/About";
import Projects from "../components/Sections/Projects";
import Contact from "../components/Sections/Contact";

export default function Home() {

  return (
    <div>
      <Header />
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}