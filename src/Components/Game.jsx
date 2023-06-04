import React from "react";
import Video from "../assets/intro.mp4";

const Game = () => {
  return (
    <section className="pt-[150px] pb-[70px] w-full relative">
      <div className="container grid gap-10 justify-center items-center">
        <article className="flex flex-col gap-4 justify-center items-center">
          <h1 className="font-primary text-3xl max-w-[700px] mx-auto text-center  md:text-6xl">
            introducing killer kernmit shooter
          </h1>
          <p className="font-secondary text-center max-w-[900px] mx-auto">
            Prepare for adrenaline-pumping action as you guide Killer Kermit
            through exciting and treacherous landscapes. Armed with remarkable
            froggy skills, Killer Kermit showcases his mischievous side, using
            unconventional weapons and unique tactics to outsmart enemies.
            Explore the game world, solve puzzles, and unleash the full
            potential of your Killer Kermit!
          </p>
        </article>

          <video src={Video} className="mx-auto" controls></video>
      </div>
    </section>
  );
};

export default Game;
