import React from "react";

// Stylesheets
import "./App.css";
import Hero from "./components/hero-section/Hero";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery-section/Gallery";
import Main from "./components/main-section/Main";
import Testimonials from "./components/testimonials-section/Testimonials";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Main />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
