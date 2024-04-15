"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motionTransitions";
import DarkMode from "../DarkMode/Index";
import { useAppContext } from "@/app/providers";
import SelectColor from "../ChangeColor/SelectColor";
import Image from "next/image";
import SponsorButton from "../sponsor/SponsorButton";
import { useState } from "react";

export default function Header(props) {
  const { color } = useAppContext();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleClick = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <>
      <motion.header
        className="fixed z-30 w-full left-0 top-0 border-y-2 border-solid border-t-salmon  border-b-bluePantone  bg-slate-200/75 dark:bg-gray-900/75 backdrop-blur-sm p-2"
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        animate="show"
        exit={"hidden"}
      >
        <div className="flex flex-col sm:flex-row m-auto max-w-[1400px] items-start sm:justify-between sm:items-center px-4 py-1 rounded-md">
          <div className="flex justify-between w-full">
            <Image
              className="hidden md:inline-block"
              priority
              src="/LogoPrincipal.svg"
              alt="FamilyTree logo"
              width={150}
              height={150}
            />
            <div className="md:hidden flex items-center justify-center bg-bluePantone p-1 rounded-full">
              <Image
                className=" shadow-md bg-white dark:bg-gray-950 p-1 w-9 h-9 rounded-full"
                priority
                src="/logo.svg"
                alt="FamilyTree logo"
                width={40}
                height={40}
              />
            </div>

            <button
              onClick={() => handleClick()}
              className="sm:hidden p-2 h-10 w-10 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {isOpenMenu ? (
                <svg
                  id="toggleSidebarMobileClose"
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          <div
            className={`${
              !isOpenMenu ? "hidden" : ""
            } sm:inline-flex flex flex-col sm:flex-row items-start gap-2 sm:items-center w-full md:w-auto mt-4`}
          >
            <DarkMode />

            <SelectColor />

            <SponsorButton />
          </div>
        </div>
      </motion.header>
    </>
  );
}
