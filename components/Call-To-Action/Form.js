import { useAppContext } from "@/app/providers";

export default function Form(props) {
  const { color } = useAppContext();
  console.log(color);
  return (
    <>
      <aside
        className={`absolute right-0 mt-4 mr-4 flex flex-col items-center p-2 bg-${color}-500 shadow-sm shadow-${color}-600 h-96 min-w-60 max-w-80 rounded-md`}
      >
        <h2
          className={`grid place-content-center font-bold w-full h-20 text-${color}-700 text-2xl bg-${color}-50 shadow-sm`}
        >
          The form header
        </h2>
        <article
          className={`flex flex-col items-center mt-2 justify-between p-2 bg-${color}-700 h-full`}
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
            className={`bg-yellow-50 hover:shadow-xl hover:shadow-${color}-50 text-${color}-500  font-bold p-2 animate-pulse hover:animate-pulse-fade-in  rounded-lg`}
          >
            Call-to-ction
          </button>
        </article>
      </aside>
    </>
  );
}
