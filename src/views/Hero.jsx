import { ReactTyped } from "react-typed";

export const Hero = () => {
  return (
    <section id="intro">
      <div className="overflow-hidden pb-5">
        <div className="relative">
          <div className="bg-primary-500">
            <div className="container mx-auto grid grid-cols-2 justify-items-center gap-y-20 px-2 py-20 sm:px-4">
              <div className="col-span-2 w-[255px] lg:col-span-1">
                <h1 className="text-5xl font-bold leading-tight drop-shadow-xl">
                  WAVEWOLF <br />
                </h1>
                <h1 className="text-3xl font-bold leading-tight drop-shadow-xl">
                Johannes Wolf
                <br></br>
                Webdesign
                </h1>
                <ReactTyped
                  className="text-xl font-light uppercase leading-10"
                  strings={["Surfen mit Stil"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </div>
              <div className="col-span-2 animate-move-y lg:col-span-1">
                <figure className="h-56">
                  <img src="img/hero.svg" alt="" className="h-full" />
                </figure>
              </div>
            </div>
          </div>
          <div className="left-0 h-[150px] w-[6000px] animate-wave-1 bg-wave bg-bottom"></div>
          <div className="absolute bottom-0 left-0 h-[150px] w-[6000px] animate-wave-2 bg-wave bg-bottom opacity-50"></div>
        </div>
      </div>
    </section>
  );
};
