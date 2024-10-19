import { motion } from "framer-motion";
import { fadeUp } from "../../helpers";
import { BsEye, BsGithub } from "react-icons/bs";
import { Link } from "react-scroll";

export const Card = ({
  animatePresence,
  image,
  title,
  description,
  price,
  urlContact,
  classes,
  index,
  discount 
}) => {
  return (
    <motion.div
      key={index}
      className={`${classes} col-span-12 flex h-[400px] flex-col overflow-hidden rounded-lg bg-white shadow-[0_0.5rem_1rem_rgba(0,_0,_0,_0.15)] md:col-span-6 lg:col-span-4 relative`}
      initial={animatePresence ? "initial" : false}
      whileInView="animate"
      variants={fadeUp}
      viewport={{
        once: true,
      }}
      custom={index}
    >
       {/* Banner für Rabatt */}
       {discount && (
        <div className="absolute top-0 left-0 bg-red-500 text-white text-s font-bold px-2 py-1 z-10">
          -50 % Rabatt
        </div>
      )}
      <figure>
        <img
          className="h-[180px] w-full object-cover"
          src={image}
          alt={title}
        />
        <figcaption className="my-2 px-2 text-xl font-semibold">
          {title}
        </figcaption>
        <figcaption className="line-clamp-5 px-2 text-sm">
          {description}
        </figcaption>
        <figcaption className="px-2 text-sm font-bold mt-4">
          {price}
        </figcaption>
      </figure>
      <div className="mt-auto flex justify-center gap-10 p-3">
        <Link
          to="contact" // Scroll-Ziel (id des Kontaktabschnitts)
          smooth={true}
          offset={-100} // Abstand, falls ein Sticky-Header existiert
          duration={500}
          className="flex items-center gap-1 rounded-full bg-primary-500 px-2 py-1 text-white shadow-[inset_0px_-4px_2px_rgb(0_0_0_/_25%)] hover:animate-zoom cursor-pointer"
        >
          Anfragen
        </Link>
        {/*
        <a
          href={urlRepo}
          className="flex items-center gap-1 rounded-full border-2 border-primary-500 px-2 py-1 text-primary-500 hover:animate-zoom"
        >
          <BsGithub />
          Repo
        </a>
        */}
      </div>
    </motion.div>
  );
};
