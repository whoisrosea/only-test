import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // Импортируем стили пагинации
import cls from "./BottomSlider.module.scss";
import { Event } from "../../config";
import { useStore } from "@nanostores/react";
import { $timePeriod } from "../../store/timePeriod";
import { motion, AnimatePresence } from "framer-motion";
import { FreeMode, Navigation, Pagination } from "swiper/modules"; // Импортируем Pagination

const SlideContent = memo(({ event }: { event: Event }) => (
  <div className={cls.slide}>
    <div className={cls.slide__year}>{event.year}</div>
    <div className={cls.slide__text}>{event.text}</div>
  </div>
));

export default function BottomSlider() {
  const timePeriod = useStore($timePeriod);

  return (
    <div className={cls.swiperContainer}>
      <AnimatePresence mode="wait">
        <motion.div
          key={timePeriod.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <hr className={cls.swiperContainer__line} />

          <Swiper
            slidesPerView={3}
            spaceBetween={80}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
                spaceBetween: 25,
                freeMode: true,
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 80,
                freeMode: false,
              },
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            className={cls.swiper}
            navigation
            modules={[Navigation, FreeMode, Pagination]}
          >
            {timePeriod.events.map((event) => (
              <SwiperSlide key={event.id}>
                <SlideContent event={event} />
              </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
          </Swiper>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
