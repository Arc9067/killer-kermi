import React from "react";
import logo from "../assets/logo.png"

const Token = () => {
  return (
    <section className=" pt-[50px] w-full bg-secondary">
      <div className="container flex justify-center items-center flex-col gap-6">
        <h1 className="font-primary text-4xl text-tertiary max-w-[700px] mx-auto text-center  md:text-6xl">
          tokenomics
        </h1>

        <div className="grid w-full gap-10 lg:text-start grid-cols-1 lg:grid-cols-2 justify-between items-center">
          <div className="flex flex-col gap-4 items-start">
            <article className="flex gap-4">
              <div className="h-6 w-6 bg-tertiary rounded-full"></div>
              <h2 className="font-secondary text-2xl text-white">
                Token Name: Killer
              </h2>
            </article>
            <article className="flex  gap-4">
              <div className="h-6 w-6 bg-tertiary rounded-full"></div>
              <h2 className="font-secondary text-2xl text-white">
                Total Supply: 100 million
              </h2>
            </article>
            <article className="flex  gap-4">
              <div className="h-6 w-6 bg-tertiary rounded-full"></div>
              <h2 className="font-secondary text-2xl text-white">
                Tax Structure: 0% tax on buys and Sells
              </h2>
            </article>
          </div>
          <img
            src={logo}
            alt=""
            className="md:w-[25rem]  mx-auto rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Token;
