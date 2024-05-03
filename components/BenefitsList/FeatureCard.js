import { useAppContext } from "@/app/providers";
import { benefits, features } from "./list.data";
import Image from "next/image";
import GridBackground from "../Grid-background/GridBackground";
import { useState } from "react";

export default function FeatureCard(props) {
  const { color } = useAppContext();
  let counter = 0;

  const isEven = (id) => {
    if (id % 2 === 0) {
      return true;
    }
    return false;
  };
  return (
    <>
      {benefits.map(({ id, shortTitle, text, img }) => {
        counter = counter + 1;
        return (
          <div key={id}>
            <GridBackground
              backdropTop
              backdropBottom
              heroImageNumber={counter}
            >
              <section className="p-4 md:p-6 my-20 md:mx-0 text-gray-950 dark:text-white">
                <h4 className="capitalize text-3xl md:text-4xl font-bold mb-6">
                  {shortTitle}
                </h4>
                <div className="grid grid-cols-1  md:grid-cols-2">
                  <Image
                    src={img}
                    alt={shortTitle + " image"}
                    width={500}
                    height={300}
                    className={` ${
                      !isEven(id) ? "md:order-last" : ""
                    } mx-auto mb-8 md:mb-0 h-80 object-cover rounded-md`}
                  />
                  <p
                    className={`md:mx-10 rounded-lg p-4 bg-white dark:backdrop-blur dark:bg-slate-900/30 dark:ring-1 dark:ring-inset dark:ring-white/10 shadow-xl`}
                  >
                    {text}
                  </p>
                </div>
              </section>
            </GridBackground>
          </div>
        );
      })}
    </>
  );
}
