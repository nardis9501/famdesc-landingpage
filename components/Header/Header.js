"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motionTransitions";
import DarkMode from "../DarkMode/Index";
import { useAppContext } from "@/app/providers";
import SelectColor from "../ChangeColor/SelectColor";
import Image from "next/image";

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
            <div>
              <Image
                className="hidden md:inline-block"
                priority
                src="/LogoPrincipal.svg"
                alt="FamilyTree logo"
                width={150}
                height={150}
              />
              <div className="md:hidden flex items-center justify-center bg-[#0e67a4] p-1 rounded-full">
                <Image
                  className=" shadow-md bg-white dark:bg-black p-1 w-9 h-9 rounded-full"
                  priority
                  src="/logo.svg"
                  alt="FamilyTree logo"
                  width={40}
                  height={40}
                />
              </div>
            </div>
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
