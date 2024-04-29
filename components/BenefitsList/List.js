import { useAppContext } from "@/app/providers";
import { benefits } from "./list.data";

export default function List(props) {
  const { color } = useAppContext();

  return (
    <>
      <article className="bg-white/45 shadow-md shadow-white/5 dark:bg-black/5 dark:shadow-black/5 p-4 font-medium text-gray-900 dark:text-white text-xl lg:text-2xl px-2 py-8 mx-auto text-center lg:py-6 lg:px-6">
        <p>
          Here are some of the key benefits our platform offers to help you
          connect, share and preserve meaningful moments with your loved ones.
        </p>
        <ol className="list-decimal list-inside">
          {benefits.map(({ id, title }) => (
            <li
              key={id}
              className={`${
                color === "blue" &&
                "bg-blue-500 hover:bg-blue-100 hover:text-blue-600"
              } ${
                color === "red" &&
                "bg-red-500 hover:bg-red-100 hover:text-red-600"
              } p-2 my-4 text-left hover:animate-tilt animate-delay-300 animate-duration-slow rounded-lg font-semibold text-gray-700 dark:text-white`}
            >
              {title}
            </li>
          ))}
        </ol>
      </article>
    </>
  );
}
