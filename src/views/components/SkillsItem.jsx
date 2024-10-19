import { motion } from "framer-motion";
import { fadeUp } from "../../helpers";

export const SkillsItem = ({ title, index }) => {
  return (
    <motion.figure
      initial="initial"
      whileInView="animate"
      variants={fadeUp}
      viewport={{
        once: true,
      }}
      custom={index}
    >
      <div className="mx-auto h-[60px] w-[60px] rounded-full bg-white">
        <img className="p-3" src={`./img/skills/${title}.png`} alt={title} />
      </div>
      <figcaption className="mt-2 text-center font-semibold first-letter:uppercase">
        {title}
      </figcaption>
    </motion.figure>
  );
};
