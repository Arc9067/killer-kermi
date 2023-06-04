import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Token from "./Components/Token";
import Map from "./Components/Map";

const App = () => {
  return (
    <div className="bg-primary w-full relative min-h-screen">
      <Header />
      <Hero />
      <Token />
      <Map />
    </div>
  );
};

export default App;
