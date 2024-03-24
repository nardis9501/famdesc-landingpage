"use client";
import { AnimatePresence, motion } from "framer-motion";
import { transitionVariantsPage } from "@/utils/motionTransitions";
import { useAppContext } from "@/app/providers";

export default function Transition(props) {
  const { color } = useAppContext();

  return (
    <>
      <AnimatePresence mode="wait">
        <div>
          <motion.div
            className={`fixed top-0 bottom-0 right-full w-screen h-screen z-30 ${
              color === "blue"
                ? "bg-blue-950"
                : color === "red"
                ? "bg-red-950"
                : ""
            }`}
            variants={transitionVariantsPage}
            initial="initial"
            animate="animate"
            exit={"exit"}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
          ></motion.div>

          <motion.div
            className={`fixed top-0 bottom-0 right-full w-screen h-screen z-20 opacity-50 ${
              color === "blue"
                ? "bg-blue-800"
                : color === "red"
                ? "bg-red-800"
                : ""
            }`}
            variants={transitionVariantsPage}
            initial="initial"
            animate="animate"
            exit={"exit"}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
          ></motion.div>
        </div>
      </AnimatePresence>
    </>
  );
}
