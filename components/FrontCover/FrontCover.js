"use client";
import { useAppContext } from "@/app/providers";
import Image from "next/image";

export default function FrontCover(props) {
  const { color } = useAppContext();
  return (
    <>
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
            src="/familie-cover.jpeg"
            alt="familie-cover"
            width={450}
            height={500}
          />
        </div>
      </section>
    </>
  );
}
