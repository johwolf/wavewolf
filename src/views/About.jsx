import { motion } from "framer-motion";
import { BsDownload } from "react-icons/bs";
import { calculateAge, fadeLeft, fadeRight } from "../helpers";

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
          <p>
          Mein Ziel ist es, Unternehmen mit modernen Webseiten zu einem überzeugenden Auftritt und langfristiger Kundenzufriedenheit zu verhelfen. Als angehender Wirtschaftsinformatiker (B.Sc.) und Webdesigner biete ich Ihnen maßgeschneiderte Lösungen zu attraktiven Konditionen. 
          </p>
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
                <span className="mb-2 font-bold uppercase">Email</span>
                <p>info@wavewolf.de</p>
              </li>
              <li>
                <span className="mb-2 font-bold uppercase">Telefon</span>
                <p>+49 1743338839</p>
              </li>
            </ul>
            <ul className="flex flex-col gap-5">
              <li>
                <span className="mb-2 font-bold uppercase">Standort</span>
                <p>Gundelfingen i. Br.</p>
              </li>
              <li>
                <span className="mb-2 font-bold uppercase">Sprachen</span>
                <p>deutsch, englisch </p>
              </li>
              <li>
                <span className="mb-2 font-bold uppercase">Verfügbarkeit</span>
                <p>täglich, 9-17 Uhr</p>
              </li>
            </ul>
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
