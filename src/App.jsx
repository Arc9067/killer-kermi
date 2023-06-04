import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <div className="bg-primary w-full relative min-h-screen">
      <Header />
      <Hero />
    </div>
  );
};

export default App;
