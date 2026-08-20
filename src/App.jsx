import "./App.css";
import Zoom from "@mui/material/Zoom";
import { useEffect } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import ScrollReveal from "./components/scrollreveal";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <main>

        <Zoom in timeout={700}>
          <div>
            <Hero />
          </div>
        </Zoom>

        <ScrollReveal>
          <About />
        </ScrollReveal>

        <ScrollReveal>
          <Projects />
        </ScrollReveal>

      </main>

    </div>
  );
}

export default App;
