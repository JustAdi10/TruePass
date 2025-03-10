import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Categories from "./Categories";
import EventsSection from "./EventsSection";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Categories />
      <EventsSection />
      <Footer />
    </div>
  );
}

export default App;
