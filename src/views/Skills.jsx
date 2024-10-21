import { BsBrushFill, BsCodeSlash, BsFillTabletFill } from "react-icons/bs";
import { SkillsItem } from "./components";
import { skills } from "../data";

export const Skills = () => {
  return (
    <section className="overflow-hidden" id="skills">
      <div className="left-0 h-[50px] w-[6000px] -scale-y-100 bg-wave bg-contain bg-bottom"></div>
      <div className="bg-primary-500 py-20">
        <div className="container mx-auto px-2 sm:px-4">
          <h1 className="text-center text-2xl font-bold uppercase">
            Meine Skills
          </h1>
          <p className="mb-16 text-center font-light">
          Ich entwerfe schöne und skalierbare Webseiten
          </p>
          <div className="flex flex-wrap justify-center gap-7">
            {skills.map((item, i) => (
              <SkillsItem key={i} index={i} {...item} />
            ))}
          </div>
          <div className="mt-20 grid grid-cols-12 gap-5 gap-y-8">
            <div className="col-span-12 flex gap-10 md:col-span-4">
              <BsBrushFill className="h-fit text-9xl" />
              <div>
                <h3 className="mb-2 text-xl font-semibold">
                  Design + Entwicklung
                </h3>
                <p className="text-sm">
                Klares, modernes Design – optimiert für Leistung, Suchmaschinen und die Umwandlung von Webseiten-Besuchern in zahlende Kunden.
                </p>
              </div>
            </div>
            <div className="col-span-12 flex gap-10 md:col-span-4">
              <BsCodeSlash className="h-fit text-9xl" />
              <div>
                <h3 className="mb-2 text-xl font-semibold">Technologien</h3>
                <p className="text-sm">
                  HTML-5, CSS, Bootstrap, Javascript, React und bei Bedarf weitere aktuelle Technologien
                </p>
              </div>
            </div>
            <div className="col-span-12 flex gap-10 md:col-span-4">
              <BsFillTabletFill className="h-fit text-9xl" />
              <div>
                <h3 className="mb-2 text-xl font-semibold">
                  Responsive
                </h3>
                <p className="text-sm">
                Ein responsives Design macht Ihre Website für alle Benutzer zugänglich, unabhängig von ihrem Gerät.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="left-0 h-[50px] w-[6000px] -scale-x-100 bg-wave bg-contain bg-bottom"></div>
    </section>
  );
};
