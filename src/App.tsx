// import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TechnicalSkills from "./components/TechnicalSkills";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Experience />
      <TechnicalSkills />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
