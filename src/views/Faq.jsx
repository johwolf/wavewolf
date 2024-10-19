import { Accordion } from "@szhsin/react-accordion";
import { CustomAccordionItem } from "./components";
import { faqs } from "../data";

export const Faq = () => {
  return (
    <section className="overflow-hidden" id="faq">
      <div className="left-0 h-[50px] w-[6000px] -scale-y-100 bg-wave bg-contain bg-bottom"></div> 
      <div className="bg-primary-500 py-20"> 
        <div className="container mx-auto px-2 sm:px-4">
          <h1 className="text-center text-2xl font-bold uppercase">FAQ</h1>
          <p className="mb-16 text-center font-light">
            Häufig gestellte Fragen:
          </p>
          <Accordion transition transitionTimeout={250}>
            {faqs.map((item, i) => (
              <CustomAccordionItem key={i} index={i} {...item} />
            ))}
          </Accordion>
        </div>
      </div>
      <div className="left-0 h-[50px] w-[6000px] -scale-x-100 bg-wave bg-contain bg-bottom "></div> 
    </section>
  );
};
