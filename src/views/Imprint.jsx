import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../helpers";

export const Imprint = () => {
  return (
    <section
      className="container mx-auto overflow-hidden px-2 py-36 sm:px-4"
      id="imprint"
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
          <h1 className="mb-5 text-2xl font-bold uppercase">Impressum</h1>
          <p>
            <strong>Angaben gemäß § 5 TMG:</strong>
            <br />
            WaveWolf Webdesign - Johannes Wolf<br />
            Waldstraße 20a<br />
            79194 Gundelfingen<br />
          </p>
          <p className="mt-5">
            <strong>Kontakt:</strong>
            <br />
            Telefon: +49 174 3338839<br />
            E-Mail: info@wavewolf.de
          </p>
          <p className="mt-5">
            <strong>Vertreten durch:</strong>
            <br />
            Johannes Wolf
          </p>
          <p className="mt-5">
            <strong>Umsatzsteuer-ID:</strong>
            <br />
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
            <br />
            DE
          </p>
          <p className="mt-5">
            <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong>
            <br />
            Johannes Wolf<br />
            Waldstraße 20a<br />
            79194 Gundelfingen
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
            <p>
              <strong>Haftungsausschluss:</strong>
              <br />
              <br />
              <strong>Haftung für Inhalte</strong>
              <br />
              <br />
              1. Inhalt <br />
              Johannes Wolf übernimmt keine Haftung für die Aktualität, die inhaltliche Richtigkeit, Vollständigkeit oder Qualität der bereitgestellten Informationen und Materialien, es sei denn, die Fehler wurden vorsätzlich oder grob fahrlässig aufgenommen. Dies bezieht sich auf jegliche materielle und immaterielle Schäden, die durch die Nutzung der von Johannes Wolf auf seiner Webseite bereitgestellten Informationen und Materialien verursacht wurden. Alle Angebote sind freibleibend und unverbindlich.
              <br></br>
              <br />
              2. Verweise und Links <br />
              Johannes Wolf hat keinen Einfluss auf die Gestaltung und die Inhalte fremder Materialien, auf die von seiner Webseite aus direkt oder indirekt verwiesen wird. Daher distanziert sich Johannes Wolf ausdrücklich von solchen Webseiten und lehnt hierfür eine Haftung ab. Sofern Johannes Wolf Kenntnis von rechtswidrigen Inhalten fremder Webseiten hat und es ihm technisch möglich und zumutbar ist, werden diese Linkverweise entfernt.
              <br></br>
              <br />
              3. Copyright <br />
              Das Layout der Webseite, der benutzen Fotos, Bilder und Logos sowie Texte sind urheberrechtlich geschützt. Eine Vervielfältigung und / oder Nutzung ist ohne vorherige Zustimmung von Johannes Wolf nicht gestattet.
              <br></br>
              <br />
              Quellnachweis <br />
              Template by Templatemonster
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
