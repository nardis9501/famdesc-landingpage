"use client";
import Form from "@/components/Call-To-Action/Form";
import Header from "@/components/Header/Header";
import Transition from "@/components/Transition/Transition";
import { fadeIn } from "@/utils/motionTransitions";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <Transition /> */}
      <div className="conteiner relative m-auto  md:max-w-[1200px] border-solid border-8 border-blue-500 rounded-lg">
        <Header />

        <div
          className="flex flex-col items-center  w-full
        bg-gradient-to-b from-blue-50 to-blue-300"
        >
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
          >
            <div className="sticky top-2 ">
              <Form />
            </div>
            <main>
              <section className="grid grid-cols-2 h-80 w-full p-10 bg-blue-700 border-solid border-b border-blue-500">
                <div className="flex items-center justify-center rounded-md bg-black p-10">
                  4: Hero Shot Photo or Video
                </div>
              </section>
              <section className="grid grid-cols-2 p-10 text-blue-50 text-2xl">
                <article className="bg-blue-500 p-4 rounded-lg shadow-lg">
                  <p>
                    This is introductory content that explains your offering in
                    more detail. It should follow on benefits of your headline
                    and explain the benefits of your product or service
                  </p>
                  <ol className="list-decimal list-inside">
                    <li className="bg-blue-700 px-2 my-4 animate-jiggle hover:animate-tada animate-delay-300 animate-duration-slow hover:bg-blue-100 hover:text-blue-600 text-blue-50 rounded-lg p-4">
                      Your first feature written in the form of a benefit
                      statement
                    </li>
                    <li className="bg-blue-700 px-2 my-4 animate-jiggle hover:animate-tada animate-delay-300 animate-duration-slow hover:bg-blue-100 hover:text-blue-600 text-blue-50 rounded-lg p-4">
                      Your second feature written in the form of a benefit
                      statement
                    </li>
                    <li className="bg-blue-700 px-2 my-4 animate-jiggle hover:animate-tada animate-delay-300 animate-duration-slow hover:bg-blue-100 hover:text-blue-600 text-blue-50 rounded-lg p-4">
                      Your third feature written in the form of a benefit
                      statement
                    </li>
                    <li className="bg-blue-700 px-2 my-4 animate-jiggle hover:animate-tada animate-delay-300 animate-duration-slow hover:bg-blue-100 hover:text-blue-600 text-blue-50 rounded-lg p-4">
                      Your fourth feature written in the form of a benefit
                      statement
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
          </motion.div>
        </div>
      </div>
    </>
  );
}
