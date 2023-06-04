import React from "react";
import Logo2 from "../assets/2.png";

const Hero = () => {
  return (
    <section className="pt-[150px] w-full">
      <div className="container grid gap-10 justify-center items-center">
        <article className="flex flex-col gap-4 justify-center items-center">
          <h1 className="font-primary text-3xl max-w-[700px] mx-auto text-center  md:text-6xl">
            Welcome to the thrilling world of Killer Kermit
          </h1>
          <p className="font-secondary text-center max-w-[900px] mx-auto">
            Welcome to the thrilling world of Killer Kermit, where a courageous
            frog leaps into action, embracing the spirit of adventure and
            mischief! This white paper outlines the exciting journey of our meme
            token, Killer (Ticker: KILLER), and the accompanying game that
            brings the heroic Killer Kermit to life.
          </p>
          <div className="flex-col md:flex-row gap-4 flex  items-center">
            <a
              href=""
              className="text-3xl hover:text-secondary font-secondary px-6 py-3 bg-tertiary"
            >
              telegram
            </a>
            <a
              href=""
              className="text-3xl hover:text-secondary font-secondary px-6 py-3 bg-tertiary"
            >
              twitter
            </a>
          </div>
        </article>
        <article>
          <img src={Logo2} alt="" className="md:w-[25rem]  mx-auto rounded-full" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
