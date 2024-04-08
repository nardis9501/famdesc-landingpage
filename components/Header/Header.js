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
        <header className="fixed z-30 w-full left-0 top-0 border-y-2 border-solid border-t-salmon  border-b-bluePantone  bg-slate-200 dark:bg-gray-900 p-2">
          <div className="flex m-auto max-w-[1400px] justify-between items-center px-4 py-1 rounded-b-xl  bg-slate-200 dark:bg-gray-900">
            <div>
              <Image
                className="hidden md:inline-block"
                priority
                src="/LogoPrincipal.svg"
                alt="FamilyTree logo"
                width={150}
                height={150}
              />
              <div className="md:hidden flex items-center justify-center bg-bluePborder-b-bluePantone p-1 rounded-full">
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
        </header>
      </motion.div>
    </>
  );
}
