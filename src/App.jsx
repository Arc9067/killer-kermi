import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Token from "./Components/Token";
import Map from "./Components/Map";
import Game from "./Components/Game";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="bg-primary w-full relative min-h-screen">
      <Header />
      <Hero />
      <Token />
      <Map />
      <Game />
      <Footer />
    </div>
  );
};

export default App;
