import Image from "next/image";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center h-full w-full
     bg-gradient-to-b from-blue-50 to-blue-300"
    >
      <header className="flex flex-col justify-center items-center p-2 h-44 w-full">
        <h1 className="text-5xl font-bold text-blue-500">
          1A: Headline that matches what was clicked
        </h1>
        <h3 className="text-2xl text-blue-300">
          A supporting subheader to provide extra information
        </h3>
      </header>
      <nav className="flex justify-center">aqui va el navbar</nav>
      <div className="">
        <aside>5 aqui va el formulario</aside>
        <main>
          <section className="flex justify-center items-center h-80 w-full bg-black">
            4: Hero Shot Photo or Video
          </section>
          <section className="grid grid-cols-2 p-10">
            <article>
              <p>
                This is introductory content that explains your offering in more
                detail. It should follow on benefits of your headline and
                explain the benefits of xour product or service
              </p>

              <li>
                Your firt feature written in the form of a benefit statement
              </li>
              <li>
                Your second feature written in the form of a benefit statement
              </li>
              <li>
                Your third feature written in the form of a benefit statement
              </li>
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
