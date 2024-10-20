import { motion } from "framer-motion";
import { BsDownload } from "react-icons/bs";
import { fadeLeft, fadeRight } from "../helpers";
import { BsList, BsLinkedin } from "react-icons/bs";

export const About = () => {
  return (
    <section
      className="container mx-auto overflow-hidden px-2 py-36 sm:px-4"
      id="about"
    >
      <div className="grid grid-cols-2 gap-20">
        <motion.div
          className="col-span-2 text-center lg:col-span-1 lg:text-start"
          initial="initial"
          whileInView="animate"
          variants={fadeRight}
          viewport={{
            once: true,
          }}
        >
          <h1 className="mb-5 text-2xl font-bold uppercase">Meine Vision</h1>
          <p> Mein Ziel ist es, Unternehmen mit modernen Webseiten zu einem überzeugenden Auftritt und langfristiger Kundenzufriedenheit zu verhelfen. Ich biete maßgeschneiderte Lösungen zu attraktiven Konditionen und habe mich auf lokale Unternehmen wie Restaurants, Handwerker und Einzelhändler spezialisiert. </p>
        </motion.div>
        <motion.div
          className="col-span-2 sm:justify-self-center lg:col-span-1"
          initial="initial"
          whileInView="animate"
          variants={fadeLeft}
          viewport={{
            once: true,
          }}
        >
          <div className="flex flex-col gap-10 sm:flex-row sm:gap-32">
            <ul className="flex flex-col gap-5">
              <li>
                <span className="mb-2 font-bold uppercase">Name</span>
                <p>Johannes Wolf</p>
              </li>
              <li>
                <span className="mb-2 font-bold uppercase">Standort</span>
                <p>Freiburg i. Br.</p>
              </li>
              <li>
                <span className="mb-2 font-bold uppercase">Verfügbarkeit</span>
                <p>täglich, 9-17 Uhr</p>
              </li>
            </ul>
            {/* Rundes Bild mit Hover-Effekt */}
            <div className="mt-10 sm:mt-0 relative group">
              {/* Link, der den Hover-Effekt aktiviert */}
              <a href="https://de.linkedin.com/in/johannes-wolf-3b5702203" className="block">
                {/* Bild */}
                <img
                  src="img/profile.jpg"  // Pfad zu deinem Bild
                  alt="Profilbild"
                  className="h-48 w-48 rounded-full object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay für den Hover-Effekt */}
                <div className="absolute top-0 left-0 h-48 w-48 rounded-full flex items-center justify-center bg-primary-500 rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-300 group-hover:scale-105">
                  <span className="text-white text-sm text-center font-bold flex items-center justify-center"> 
                    Zum <BsLinkedin className="ml-1" /> &nbsp;Profil
                  </span>
                </div>
              </a>
            </div>
          </div>
          { /*
          <a
            href="#"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary-500 px-3 py-2 text-white shadow-[inset_0px_-4px_2px_rgb(0_0_0_/_25%)] hover:animate-zoom"
          >
            <BsDownload />
            Download CV
          </a>
        */}
        </motion.div>
      </div>
    </section>
  );
};
