import { useAppContext } from "@/app/providers";
import { benefits, features } from "./list.data";
import Image from "next/image";
import GridBackground from "../Grid-background/GridBackground";
import QuoteBanner from "./QuoteBanner";

export default function FeatureCard(props) {
  let counter = 0;

  const isEven = (id) => {
    if (id % 2 === 0) {
      return true;
    }
    return false;
  };
  return (
    <>
      {benefits.map(({ id, shortTitle, text1, text2, img, phrase }, index) => {
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
                <div className="grid grid-cols-1 md:gap-20 md:grid-cols-2">
                  <Image
                    src={img}
                    alt={shortTitle + " image"}
                    width={500}
                    height={300}
                    className={` ${
                      !isEven(id) ? "md:order-last" : ""
                    } mb-8 md:mb-0 w-full  object-cover rounded-md`}
                  />

                  <div
                    className="flex flex-col  gap-10 rounded-lg
                   "
                  >
                    <p>{text1}</p>
                    <p>{text2}</p>
                  </div>
                </div>
              </section>
              <QuoteBanner phrase={phrase} />
            </GridBackground>
          </div>
        );
      })}
    </>
  );
}
