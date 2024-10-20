import { useEffect, useState } from "react";
import mixitup from "mixitup";
import { AnimatePresence, motion } from "framer-motion";
import { Card } from "./components/Card";
import { projects } from "../data";

export const Porfolio = () => {
  const [animatePresence, setAnimatePresence] = useState(true);

  useEffect(() => {
    const mixer = mixitup(".mix-container", {
      selectors: {
        target: ".mix",
      },
      animation: {
        duration: 300,
      },
    });

    mixer.filter(".mix-all");

    const handleMixClick = () => {
      setAnimatePresence(false);
    };

    const element = document.querySelector(".mix-container");
    element && element.addEventListener("mixClick", handleMixClick);

    return () => {
      element && element.removeEventListener("mixClick", handleMixClick);
      mixer.destroy();
    };
  }, []);

  return (
    <section className="container mx-auto px-2 py-36 sm:px-4" id="portfolio">
      <h1 className="text-center text-2xl font-bold uppercase">Mein Portfolio</h1>
      <p className="mb-16 text-center font-light">
      Maßgeschneiderte Webdesign-Angebote für deine Ansprüche
          </p>
      <p className="mb-16 text-center font-light"></p>
     {/*
      <ul className="mb-6 flex flex-wrap gap-x-5">
        <li
          className="cursor-pointer select-none px-2 py-1 hover:animate-zoom"
          data-filter=".mix-all"
        >
          All
        </li>
        
        <li
          className="cursor-pointer select-none px-2 py-1 hover:animate-zoom"
          data-filter=".mix-work"
        >
          Work projects
        </li>
        <li
          className="cursor-pointer select-none px-2 py-1 hover:animate-zoom"
          data-filter=".mix-personal"
        >
          Personal projects
        </li>
        
      </ul>
      */}
      <div className="mix-container grid grid-cols-12 gap-5">
        <AnimatePresence>
          {projects.map((item, i) => (
            <Card
              key={i}
              animatePresence={animatePresence}
              index={i}
              {...item}
            />
          ))}
        </AnimatePresence>
      </div>
      {/*
      <div className="my-16 flex justify-center">
        <button className="rounded-full bg-primary-500 px-3 py-2 text-white shadow-[inset_0px_-4px_2px_rgb(0_0_0_/_25%)] hover:animate-zoom">
          Load More
        </button>
      </div>
      */}
    </section>
  );
};
