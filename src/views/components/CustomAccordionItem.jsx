import { motion } from "framer-motion";
import { fadeUp } from "../../helpers";
import { AccordionItem } from "@szhsin/react-accordion";
import { BsChevronCompactDown } from "react-icons/bs";

export const CustomAccordionItem = ({ header, content, index }) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={fadeUp}
      viewport={{
        once: true,
      }}
      custom={index}
      className="bg-white shadow-xl"
    >
      <AccordionItem
        header={
          <div className="flex items-center justify-between bg-white">
            <p>{header}</p>
            <BsChevronCompactDown className="chevron" />
          </div>
        }
      >
        <div className="p-3">{content}</div>
      </AccordionItem>
    </motion.div>
  );
};
