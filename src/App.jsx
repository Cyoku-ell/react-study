import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";

function App() {
  
  return (
    <>
     <div>
      <Navbar />
     <Hero    />
     <About/>
      <Projects />
     </div>
    </>
  );
}

export default App;
