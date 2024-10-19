import { motion } from "framer-motion";
import { fadeUp } from "../../helpers";

export const Blocks = ({
  animatePresence,
  title,
  points,
  classes,
  index,
}) => {
  return (
    <motion.div
      className={`${classes} col-span-12 flex h-[300px] flex-col overflow-hidden rounded-lg bg-white shadow-[0_0.5rem_1rem_rgba(0,_0,_0,_0.15)] md:col-span-6 lg:col-span-4`}
      initial={animatePresence ? "initial" : false}
      whileInView="animate"
      variants={fadeUp}
      viewport={{
        once: true,
      }}
      custom={index}
    >
      <figure>
        {/* Umrandete Zahl */}
        <figcaption className="my-2 px-2 text-xl font-semibold ">
          <span className="inline-block rounded-full border-2 border-primary-500 px-4 py-1 mr-3">
            {index + 1}
          </span>
          {title}
          <br></br>
          
          {/* Trennstrich nach der Überschrift */}
          <hr className="my-2 border-primary-500" />
        </figcaption>
        <ul className="list-disc pl-5 space-y-2 mr-2 ml-2 mt-4">
          {points.map((point, i) => (
            <li key={i} className="text-base text-left">
              {point}
            </li>
          ))}
        </ul>
      </figure>
    </motion.div>
  );
};
