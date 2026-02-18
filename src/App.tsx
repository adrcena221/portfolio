import { useEffect } from "react"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Header } from "./components/Header"
import { Skills } from "./pages/Skills"
import { Work } from "./pages/Work"
import { Projects } from "./pages/Projects"
import { Contact } from "./pages/Contact"
import Aurora from './components/Aurora';


function App() {

  useEffect(() => {
    const sections = document.querySelectorAll("section");
  
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.4 }
    );
  
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  
  
  return (
    <>
      <div className="fixed inset-0 -z-10 pointer-events-none">
          <Aurora
              colorStops={["#667fff", "#4ccce6", "#5227ff"]}
              blend={0.5}
              amplitude={0.5}
              speed={1.2}
          />
      </div>
      
      <Header />

      {/* Page Sections */}
      <main className="md:snap-y md:snap-mandatory h-screen overflow-y-scroll scroll-smooth will-change-transform">
        <section id="home" className="md:snap-start flex items-center">
          <Home />
        </section>

        <section id="about" className="md:snap-start h-screen flex items-center">
          <About />
        </section>

        <section id="skills" className="md:snap-start h-screen flex items-center">
          <Skills />
        </section>

        <section id="work" className="md:snap-start h-screen flex items-center">
          <Work />
        </section>

        <section id="projects" className="md:snap-start h-screen flex items-center">
          <Projects />
        </section>

        <section id="contact" className="md:snap-start h-screen flex items-center">
          <Contact />
        </section>
      </main>
    </>

  )
}

export default App
