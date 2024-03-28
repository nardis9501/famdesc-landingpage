import { useAppContext } from "@/app/providers";
import { features } from "./list.data";
import Image from "next/image";

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
        <section
          key={id}
          className={
            "p-8 md:p-10 my-20 m-4 md:mx-8 text-gray-950 dark:text-white  rounded-md bg-white/5 shadow-md shadow-white/5 dark:bg-black/5 dark:shadow-black/5"
          }
        >
          <h4 className="text-4xl font-bold mb-6">{title}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 text-2xl">
            <p
              className={`mb-8 md:mb-0 md:mx-10 ${
                isEven(id) ? "md:order-last" : ""
              }`}
            >
              {text}
            </p>

            <Image
              src={img}
              alt={title + " image"}
              width={500}
              height={300}
              className="mx-auto h-80 rounded-md"
            />
          </div>
        </section>
      ))}
    </>
  );
}
