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
        className={`lg:h-screen grid place-content-center drop-shadow-none pt-56 pb-20 mb-20 lg:mb-0 bg-gradient-to-b lg:bg-gradient-radial to-slate-50 dark:to-slate-900 ${
          color === "blue"
            ? "from-blue-500 via-blue-500/80 dark:from-blue-700/90 dark:via-blue-700/90"
            : color === "red"
            ? "from-red-500 via-red-500/80 dark:from-red-700/90 dark:via-red-950/90"
            : ""
        }`}
      >
        <section className="md:grid grid-cols-3 h-full max-w-[1300px] px-2">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="absolute col-span-2 top-0 left-0 mt-24 sm:mt-32 px-4 md:mt-0  md:relative z-10 flex flex-col h-full w-full"
          >
            <h1
              className={`flex flex-col font-medium my-3 text-3xl md:text-4xl lg:text-5xl text-black dark:text-slate-100`}
            >
              <span>Build, Share, Preserve:</span>
              Famdesc - Your Digital Haven for Family Moments
            </h1>
            <h2
              className={`text-xl md:text-3xl font-medium text-black dark:text-slate-300 ${
                color === "blue"
                  ? "text-blue-500 md:text-blue-700"
                  : color === "red"
                  ? "text-red-500 md:text-red-700"
                  : ""
              }`}
            >
              Discover a New Way to Preserve and Share Your Family&apos;s
              Precious Moments
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
              priority
              className="rounded-lg"
              src="/familie-cover.webp"
              alt="familie-cover"
              width={450}
              height={500}
            />
          </motion.div>
        </section>
      </div>
    </>
  );
}
