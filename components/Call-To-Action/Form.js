import { useAppContext } from "@/app/providers";

export default function Form(props) {
  const { color } = useAppContext();

  return (
    <>
      <div className="hidden">
        <aside
          className={`absolute right-0 mt-4 mr-4 flex flex-col items-center p-2 ${
            color === "blue"
              ? "bg-blue-500 shadow-blue-600"
              : color === "red"
              ? "bg-red-500 shadow-red-600"
              : ""
          } shadow-sm  h-96 min-w-60 max-w-80 rounded-md`}
        >
          <h2
            className={`grid place-content-center font-bold w-full h-20 ${
              color === "blue"
                ? "text-blue-700  bg-blue-50"
                : color === "red"
                ? "text-red-700 bg-red-50"
                : ""
            } text-2xl  shadow-sm`}
          >
            The form header
          </h2>
          <article
            className={`flex flex-col items-center mt-2 justify-between p-2 ${
              color === "blue"
                ? "bg-blue-700"
                : color === "red"
                ? "bg-red-700"
                : ""
            } h-full`}
          >
            <p>
              Help us expand our team and resources to build this social network
              faster for you.
            </p>
            <form className="flex flex-col justify-center w-full" action="">
              Name
              <input required className="my-1" type="text" />
              Email
              <input required className="my-1" type="email" />
              Would you like to get a insign
              <input required type="checkbox" name="" id="" />
            </form>
            <button
              className={`bg-yellow-50 hover:shadow-xl ${
                color === "blue"
                  ? "hover:shadow-blue-50 text-blue-500"
                  : color === "red"
                  ? "hover:shadow-red-50 text-red-500"
                  : ""
              }   font-bold p-2 animate-pulse hover:animate-pulse-fade-in  rounded-lg`}
            >
              Call-to-ction
            </button>
          </article>
        </aside>
      </div>
    </>
  );
}
