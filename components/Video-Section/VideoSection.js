import React from "react";
import SponsorButton from "../sponsor/SponsorButton";
import { useAppContext } from "@/app/providers";

export default function VideoSection(props) {
  const { color } = useAppContext();
  return (
    <>
      <section
        className={`md:grid md:grid-cols-2 place-content-center p-1 md:px-2 md:py-8 text-white ${
          color === "blue" && "bg-blue-500 shadow-sm shadow-blue-500"
        } ${color === "red" && "bg-red-500"}`}
      >
        <div className="flex justify-center col-span-2">
          <h2 className="text-4xl font-semibold capitalize">
            Created with you in mind: just right for you
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center my-10">
          <iframe
            className="w-full h-full aspect-video rounded-lg border-none"
            src="/promo.mp4"
          ></iframe>
          <p className="p-2 font-semibold">Video of FamilyTree</p>
        </div>

        <div className="flex flex-col my-10 md:ml-4 lg:ml-20 text-2xl lg:leading-9">
          Built on the basis of these pillars:
          <ul className="space-y-4 text-left">
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>Increased social interaction</span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>Designed to give you the best possible experience</span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>Your privacy is our priority</span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>Committed to the truth</span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>We care about our credibility and your trust</span>
            </li>
          </ul>
        </div>
        <div className="flex justify-center col-span-2">
          <SponsorButton isWhite />
        </div>
      </section>
    </>
  );
}
