"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motionTransitions";
import { useAppContext } from "@/app/providers";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { TestimonialsData } from "./Testimonials.data";
import Image from "next/image";

export default function TestimonialsSlider(props) {
  const { color } = useAppContext();
  return (
    <>
      <div className="flex flex-col justify-center text-gray-900 dark:text-white mt-10">
        <motion.h1
          className="my-5 text-4xl text-center md:my-10"
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <span
            className={`${
              color === "blue"
                ? "text-blue-500"
                : color === "red"
                ? "text-red-500"
                : ""
            }`}
          >
            Testimonials
          </span>
        </motion.h1>

        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
            }}
            freeMode={true}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="h-[370px] sm:h-[300px] w-[290px] sm:w-[545px] lg:h-[350px]"
          >
            {TestimonialsData.map(
              ({ id, username, avatarUrl, testimonial, job }) => (
                <SwiperSlide key={id}>
                  <Image
                    src={avatarUrl}
                    alt={username}
                    width={100}
                    height={100}
                    className="rounded-full mx-auto"
                  />
                  <h4 className="text-center">{username}</h4>
                  <h5 className="text-center text-gray-500 dark:text-gray-400">
                    {job}
                  </h5>
                  <p className="mt-5 text-center">{testimonial}</p>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </motion.div>
      </div>
    </>
  );
}
