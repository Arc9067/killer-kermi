import React from "react";

const Map = () => {
  return (
    <section className=" py-[50px] w-full">
      <div className="container flex justify-center items-center flex-col gap-6">
        <h1 className="font-primary text-4xl text-tertiary max-w-[700px] mx-auto text-center  md:text-6xl">
          roadmap
        </h1>
        <div className="grid mt-7 w-full gap-10  grid-cols-1 lg:grid-cols-3 items-center gap-8 justify-between flex-col md:flex-row it">
          <article className="h-[350px] flex flex-col justify-center px-6 rounded-2xl bg-tertiary">
            <h1 className="font-primary text-secondary text-3xl">
              Leap of Launch
            </h1>
            <ul className="flex flex-col gap-2 ">
              <li className="font-secondary">air launch of Killer token</li>
              <li className="font-secondary">
                air launch of Killer token
              </li>{" "}
              <li className="font-secondary">
                Deployment on a secure and decentralized blockchain
              </li>{" "}
              <li className="font-secondary">
                Listing on popular decentralized exchanges
              </li>
            </ul>
          </article>
          <article className="h-[350px] flex flex-col justify-center px-6 rounded-2xl bg-tertiary">
            <h1 className="font-primary text-secondary text-3xl">
              Army of Frogs
            </h1>
            <ul className="flex flex-col gap-2 ">
              <li className="font-secondary">
                {" "}
                Development of the Killer Kermit game
              </li>
              <li className="font-secondary"></li>{" "}
              <li className="font-secondary">
                Introducing the frog protagonist, Killer Kermit
              </li>{" "}
              <li className="font-secondary">
                Embark on an epic journey through the vibrant and dangerous
                world
              </li>
            </ul>
          </article>{" "}
          <article className="h-[350px] flex flex-col justify-center px-6 rounded-2xl bg-tertiary">
            <h1 className="font-primary text-secondary text-3xl">
              Jumping into Action
            </h1>
            <ul className="flex flex-col gap-2 ">
              <li className="font-secondary">
                Launching the game with captivating levels and challenges
              </li>
              <li className="font-secondary">
                Launching the game with captivating levels and challenges
              </li>{" "}
              <li className="font-secondary">
                Incorporating interactive gameplay elements and achievements
              </li>{" "}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};
export default Map;
