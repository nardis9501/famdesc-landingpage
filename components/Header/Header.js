"use client";
import { motion } from "framer-motion";

// import { socialNetworks } from "./dataHeader";
import Link from "next/link";
import { fadeIn } from "@/utils/motionTransitions";
export default function Header(props) {
  return (
    <>
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        animate="show"
        exit={"hidden"}
      >
        <header className="p-4">
          <div className="flex flex-row justify-between items-center">
            <span className="bg-blue-500 p-4 rounded-lg">Logo</span>

            <p className="">dark mode+theme</p>
          </div>

          <div className="w-full grid place-content-center">
            <h3 className="flex justify-center font-semibold my-3 text-4xl text-blue-50">
              Family
              <span className="text-blue-500">Tree</span>
            </h3>
            <h2 className="animate-fade-in text-2xl text-blue-200">
              A closer and high value social media
            </h2>
          </div>
        </header>
      </motion.div>
    </>
  );
}
