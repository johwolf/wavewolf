import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { SwiperItem } from "./components";
import { fadeUp } from "../helpers";
import { testimonials } from "../data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Testimonials = () => {
  return (
    <section className="overflow-hidden" id="testimonials">
      
      <div className="bg-white py-20">
        <div className="container mx-auto px-2 sm:px-4">
          <h1 className="text-center text-2xl font-bold uppercase">
            Referenzen
          </h1>
          <p className="mb-16 text-center font-light">
            Was meine Kunden sagen
          </p>
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeUp}
            viewport={{
              once: true,
            }}
          >
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={testimonials.length > 1}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              {testimonials.map((item, i) => (
                <SwiperSlide key={i}>
                  <SwiperItem index={i} {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
};
