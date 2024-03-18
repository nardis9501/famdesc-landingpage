import Image from "next/image";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center h-full w-full
     bg-gradient-to-b from-blue-50 to-blue-300"
    >
      <header className="flex flex-col justify-center items-center p-2 h-44 w-full">
        <h1 className="animate-fade-in text-5xl font-bold text-blue-500">
          1A: Headline that matches what was clicked
        </h1>
        <h3 className="animate-fade-in text-2xl text-blue-300">
          A supporting subheader to provide extra information
        </h3>
      </header>

      <div className="">
        <aside className="flex flex-col items-center p-2 bg-blue-500 shadow-sm shadow-blue-600 h-96 min-w-60 max-w-80 fixed z-10 mt-10 right-10 rounded-md">
          <h2 className="grid place-content-center font-bold w-full h-20 text-blue-700 text-2xl bg-blue-50 shadow-sm">
            The form header
          </h2>
          <article className="flex flex-col items-center mt-2 justify-between p-2 bg-blue-700 h-full">
            <p>
              A short explanatory paragraph to clarify the purpose of the form
              and what you are givinf+g in exchange for the personal data
            </p>
            <form className="flex flex-col justify-center w-full" action="">
              <input className="my-1" type="text" />
              <input className="my-1" type="text" />
            </form>
            <button className="bg-blue-50 text-blue-500 font-bold p-2 animate-pulse hover:animate-pulse-fade-in hover:bg-blue-200 rounded-lg">
              Call-to-ction
            </button>
          </article>
        </aside>
        <main>
          <section className="grid grid-cols-2 h-80 w-full p-10 bg-blue-700 border-solid border-b border-blue-500">
            <div className="flex items-center justify-center rounded-md bg-black p-10">
              4: Hero Shot Photo or Video
            </div>
          </section>
          <section className="grid grid-cols-2 p-10 text-blue-50 text-2xl">
            <article className="bg-blue-500 p-4 rounded-lg shadow-lg">
              <p>
                This is introductory content that explains your offering in more
                detail. It should follow on benefits of your headline and
                explain the benefits of your product or service
              </p>
              <ol className="list-decimal list-inside">
                <li className="bg-blue-700 px-2 my-4 animate-jiggle hover:animate-tada animate-delay-300 animate-duration-slow hover:bg-blue-100 hover:text-blue-600 text-blue-50 rounded-lg p-4">
                  Your first feature written in the form of a benefit statement
                </li>
                <li className="bg-blue-700 px-2 my-4 animate-jiggle hover:animate-tada animate-delay-300 animate-duration-slow hover:bg-blue-100 hover:text-blue-600 text-blue-50 rounded-lg p-4">
                  Your second feature written in the form of a benefit statement
                </li>
                <li className="bg-blue-700 px-2 my-4 animate-jiggle hover:animate-tada animate-delay-300 animate-duration-slow hover:bg-blue-100 hover:text-blue-600 text-blue-50 rounded-lg p-4">
                  Your third feature written in the form of a benefit statement
                </li>
                <li className="bg-blue-700 px-2 my-4 animate-jiggle hover:animate-tada animate-delay-300 animate-duration-slow hover:bg-blue-100 hover:text-blue-600 text-blue-50 rounded-lg p-4">
                  Your fourth feature written in the form of a benefit statement
                </li>
              </ol>
            </article>
            <article className="m-auto">s</article>
          </section>
          <h2 className="flex items-center justify-center h-20 text-3xl bg-blue-300 shadow-md">
            1C: A reinforcement statemnt maintain interest
          </h2>
          <section>3</section>
          <h2 className="flex items-center justify-center h-20 text-3xl bg-blue-300 shadow-md">
            1D: Te closing argument statemnet
          </h2>
        </main>
        <footer className="flex items-center justify-center h-20">
          aqui va el footer
        </footer>
      </div>
    </div>
  );
}
