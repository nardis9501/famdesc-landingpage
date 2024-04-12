"use client";
import { useAppContext } from "@/app/providers";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motionTransitions";

export default function FrontCover(props) {
  const { color } = useAppContext();
  return (
    <>
      <div
        className={`grid place-content-center drop-shadow-none pt-40 pb-20 bg-gradient-to-bl  to-slate-50 dark:to-slate-400 ${
          color === "blue"
            ? "from-blue-500 via-blue-500/80 dark:via-blue-700"
            : color === "red"
            ? "from-red-500 via-red-500/80"
            : ""
        }`}
      >
        <section className="md:grid grid-cols-2 h-full max-w-[1300px] px-2">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="absolute top-0 left-0 mt-24 sm:mt-32 px-4 md:mt-0  md:relative z-10 flex flex-col h-full w-full"
          >
            <h1
              className={`font-medium my-3 text-4xl md:text-6xl lg:text-7xl text-black dark:text-slate-100`}
            >
              The new Network for families
            </h1>
            <h2
              className={`text-2xl md:text-4xl font-medium text-black dark:text-slate-200 ${
                color === "blue"
                  ? "text-blue-500 md:text-blue-700"
                  : color === "red"
                  ? "text-red-500 md:text-red-700"
                  : ""
              }`}
            >
              A closer and high value network
            </h2>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="md:grid place-content-end drop-shadow-xl hidden"
          >
            <Image
              className="rounded-lg"
              src="/familie-cover.jpeg"
              alt="familie-cover"
              width={450}
              height={500}
            />
          </motion.div>
        </section>
        <div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-slate-50/95 pt-32 pb-8 pointer-events-none dark:from-slate-400 absolute"></div>
      </div>
      <div className="inset-x-0 flex justify-center bg-gradient-to-b from-slate-50/95 pt-16 pb-8 pointer-events-none dark:from-slate-400"></div>
    </>
  );
}
