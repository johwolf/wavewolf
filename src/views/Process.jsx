import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Blocks } from "./components/Blocks";
import { process } from "../data";

export const Process = () => {
  const [animatePresence, setAnimatePresence] = useState(true);

  return (
    <section className="overflow-hidden" id="process">
    <div className="left-0 h-[50px] w-[6000px] -scale-y-100 bg-wave bg-contain bg-bottom"></div>
    <div className="bg-primary-500 py-20">
      <div className="container mx-auto px-2 sm:px-4">
        <h1 className="text-center text-2xl font-bold uppercase text-black">Unser Prozess</h1>
        <p className="mb-16 text-center font-light text-black">So arbeite ich mit dir zusammen</p>

        <div className="mix-container grid grid-cols-12 gap-5">
          <AnimatePresence>
            {process.map((item, i) => (
              <Blocks
                key={i}
                animatePresence={animatePresence}
                index={i}
                title={item.header}
                points={item.points}
                classes={item.classes}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
    <div className="left-0 h-[50px] w-[6000px] -scale-x-100 bg-wave bg-contain bg-bottom"></div>
  </section>
);
};