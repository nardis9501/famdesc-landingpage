import { useAppContext } from "@/app/providers";
import { features } from "./list.data";
import Image from "next/image";
import GridBackground from "../Grid-background/GridBackground";

export default function FeatureCard(props) {
  const { color } = useAppContext();

  const isEven = (id) => {
    if (id % 2 === 0) {
      return true;
    }
    return false;
  };
  return (
    <>
      {features.map(({ id, title, text, img }) => (
        <GridBackground key={id} backdropTop backdropBottom>
          <section
            className={
              "p-8 md:p-6 my-8 m-4 md:mx-0  text-gray-950 dark:text-white"
            }
          >
            <h4 className="text-4xl font-bold mb-6">{title}</h4>
            <div className="grid grid-cols-1  md:grid-cols-2 text-2xl">
              <Image
                src={img}
                alt={title + " image"}
                width={500}
                height={300}
                className={` ${
                  !isEven(id) ? "md:order-last" : ""
                } mx-auto mb-8 md:mb-0 h-80 rounded-md`}
              />
              <p
                className={`md:mx-10 rounded-lg p-10 bg-white dark:backdrop-blur dark:bg-slate-900/30 dark:ring-1 dark:ring-inset dark:ring-white/10 shadow-xl`}
              >
                {text}
              </p>
            </div>
          </section>
        </GridBackground>
      ))}
    </>
  );
}
