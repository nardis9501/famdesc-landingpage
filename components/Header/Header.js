"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motionTransitions";
import DarkMode from "../DarkMode/Index";
import { useAppContext } from "@/app/providers";
import SelectColor from "../ChangeColor/SelectColor";

export default function Header(props) {
  const { color } = useAppContext();
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
            <span
              className={`${color === "blue" && "bg-blue-500"} ${
                color === "red" && "bg-red-500"
              }  p-4 rounded-lg`}
            >
              Logo
            </span>

            <span className="flex items-center">
              <DarkMode />
              <div className="">
                <form className="m-auto md:flex  md:items-center md:place-content-center">
                  <label
                    htmlFor="demo-controlled-open-select"
                    className={`hidden md:block mb-2  text-sm font-medium ${
                      color === "blue" && "text-blue-900"
                    } ${color === "red" && "text-red-900"} dark:text-white`}
                  ></label>

                  <SelectColor />
                </form>
              </div>
            </span>
          </div>

          <div className="w-full grid place-content-center">
            <h3 className={`flex justify-center font-semibold my-3 text-4xl`}>
              Family
              <span
                className={`${color === "blue" && "text-blue-500"} ${
                  color === "red" && "text-red-500"
                }`}
              >
                Tree
              </span>
            </h3>
            <h2
              className={`animate-fade-in text-2xl ${
                color === "blue" && "text-blue-200"
              } ${color === "red" && "text-red-200"}`}
            >
              A closer and high value social media
            </h2>
          </div>
        </header>
      </motion.div>
    </>
  );
}
