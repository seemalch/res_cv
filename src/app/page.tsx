import Hero from "../components/hero";
import About from "../components/about";
import Skills from "../components/skills";
import Experience from "../components/experience";
import Projects from "../components/project";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="bg-navy text-text">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}