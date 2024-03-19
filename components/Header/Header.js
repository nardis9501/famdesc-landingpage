"use client";
import { motion } from "framer-motion";

// import { socialNetworks } from "./dataHeader";
import Link from "next/link";
import { fadeIn } from "@/utils/motionTransitions";
import DarkMode from "../DarkMode/Index";
export default function Header(props) {
  const size = "theme";
  const sizesArray = [
    { size: 5, label: "5" },

    { size: 15, label: "15" },
    { size: 20, label: "20" },
    { size: 25, label: "25" },
    { size: 30, label: "30" },
    { size: 35, label: "35" },
    { size: 40, label: "40" },
    { size: 45, label: "45" },
    { size: 50, label: "50" },
  ];
  const handleChange = () => {};
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
            <span className="flex items-center">
              <DarkMode />
              <div className="">
                <form className="m-auto md:flex  md:items-center md:place-content-center">
                  <label
                    htmlFor="demo-controlled-open-select"
                    className="hidden md:block mb-2  text-sm font-medium text-blue-900 dark:text-white"
                  >
                    Theme
                  </label>

                  <select
                    id="demo-controlled-open-select"
                    value={size}
                    onChange={handleChange}
                    className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900  md:ml-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    {<option value={size}>{size}</option>}
                    {sizesArray.map(({ size, label }) => (
                      <option key={size} value={size}>
                        {label}
                      </option>
                    ))}
                  </select>
                </form>
              </div>
            </span>
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
