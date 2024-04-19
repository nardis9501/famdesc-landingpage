import React from "react";
import SponsorButton from "../sponsor/SponsorButton";
import { useAppContext } from "@/app/providers";

export default function VideoSection(props) {
  const { color } = useAppContext();
  return (
    <>
      <section
        className={`md:grid md:grid-cols-2 place-content-center p-1 md:px-24 md:py-8 text-white ${
          color === "blue" && "bg-blue-500 shadow-sm shadow-blue-500"
        } ${color === "red" && "bg-red-500"}`}
      >
        <div className="flex justify-center col-span-2">
          <h2 className="text-4xl font-semibold">
            Title of the section: brief explanation of the objective pursued
            with this audiovisual media.
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center my-10">
          <iframe
            className="w-full h-full aspect-video rounded-lg border-none"
            src="/promo.mp4"
          ></iframe>
          <p className="p-2 font-semibold">Video of FamilyTree</p>
        </div>

        <p className="flex justify-center items-center ml-4 text-2xl leading-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="flex justify-center col-span-2">
          <SponsorButton isWhite />
        </div>
      </section>
    </>
  );
}
