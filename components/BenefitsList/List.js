import { useAppContext } from "@/app/providers";

export default function List(props) {
  const { color } = useAppContext();
  const benefitsList = [
    "Your first feature written in the form of a benefit statement",
    "Your second feature written in the form of a benefit statement",
    "Your third feature written in the form of a benefit statement",
    "Your fourth feature written in the form of a benefit statement",
  ];
  return (
    <>
      <article className="bg-white/45 shadow-md shadow-white/5 dark:bg-black/5 dark:shadow-black/5 p-4 font-medium text-gray-900 dark:text-white text-2xl px-4 py-8 mx-auto text-center lg:py-6 lg:px-6">
        <p>
          This is introductory content that explains your offering in more
          detail. It should follow on benefits of your headline and explain the
          benefits of your product or service
        </p>
        <ol className="list-decimal list-inside">
          {benefitsList.map((list, index) => (
            <li
              key={index}
              index={index}
              className={`${
                color === "blue" &&
                "bg-blue-500 hover:bg-blue-100 hover:text-blue-600 text-blue-50"
              } ${
                color === "red" &&
                "bg-red-500 hover:bg-red-100 hover:text-red-600 text-red-50"
              } p-2 my-4  hover:animate-tilt animate-delay-300 animate-duration-slow rounded-lg`}
            >
              {list}
            </li>
          ))}
        </ol>
      </article>
    </>
  );
}
