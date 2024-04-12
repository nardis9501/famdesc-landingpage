"use client";
import { useAppContext } from "@/app/providers";
import Image from "next/image";

export default function FrontCover(props) {
  const { color } = useAppContext();
  return (
    <>
      <div
        className={`grid place-content-center drop-shadow-none pt-40 pb-20 bg-gradient-to-bl  to-slate-50 ${
          color === "blue"
            ? "from-blue-500 via-blue-500/80"
            : color === "red"
            ? "from-red-500 via-red-500/80"
            : ""
        }`}
      >
        <section className="grid grid-cols-2 h-full max-w-[1300px]">
          <div className="flex flex-col justify-center">
            <h1
              className={`flex justify-center font-medium my-3 text-7xl text-black dark:text-slate-100`}
            >
              The new Network for families
            </h1>
            <h2
              className={`text-2xl ${
                color === "blue"
                  ? "text-blue-500"
                  : color === "red"
                  ? "text-red-500"
                  : ""
              }`}
            >
              A closer and high value network
            </h2>
          </div>
          <div className="grid place-content-end drop-shadow-xl">
            <Image
              className="rounded-lg"
              src="/familie-cover.jpeg"
              alt="familie-cover"
              width={450}
              height={500}
            />
          </div>
        </section>
        <div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-slate-50/95 pt-32 pb-8 pointer-events-none dark:from-gray-900 absolute"></div>
      </div>
      <div className="inset-x-0 flex justify-center bg-gradient-to-b from-slate-50/95 pt-16 pb-8 pointer-events-none dark:from-gray-900"></div>
    </>
  );
}
