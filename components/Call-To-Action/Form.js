export default function Form(props) {
  return (
    <>
      <aside className="absolute right-0 mt-4 mr-4 flex flex-col items-center p-2 bg-blue-500 shadow-sm shadow-blue-600 h-96 min-w-60 max-w-80 rounded-md">
        <h2 className="grid place-content-center font-bold w-full h-20 text-blue-700 text-2xl bg-blue-50 shadow-sm">
          The form header
        </h2>
        <article className="flex flex-col items-center mt-2 justify-between p-2 bg-blue-700 h-full">
          <p>
            A short explanatory paragraph to clarify the purpose of the form and
            what you are givinf+g in exchange for the personal data
          </p>
          <form className="flex flex-col justify-center w-full" action="">
            <input className="my-1" type="text" />
            <input className="my-1" type="text" />
          </form>
          <button className="bg-blue-50 hover:shadow-xl hover:shadow-blue-50 text-blue-500  font-bold p-2 animate-pulse hover:animate-pulse-fade-in  rounded-lg">
            Call-to-ction
          </button>
        </article>
      </aside>
    </>
  );
}
