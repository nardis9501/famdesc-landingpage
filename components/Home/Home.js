import Form from "../Call-To-Action/Form";
import Header from "../Header/Header";
import { motion } from "framer-motion";
import Testimonials from "../Testimonials/Testimonials";
import List from "../BenefitsList/List";
import { useAppContext } from "@/app/providers";
import { fadeIn } from "@/utils/motionTransitions";
import TestimonialsSlider from "../Testimonials/TestimonialsSlider";
export default function Home(props) {
  const { color } = useAppContext();

  return (
    <>
      <div
        className={`conteiner relative m-auto  md:max-w-[1200px] border-solid border-8  rounded-lg ${
          color === "blue" &&
          "border-blue-950 selection:bg-blue-300 selection:text-blue-900"
        } ${
          color === "red" &&
          "border-red-950 selection:bg-red-300 selection:text-red-900"
        }`}
      >
        <Header />

        <div
          className={`flex flex-col items-center w-full bg-gradient-to-b  ${
            color === "blue" &&
            "from-blue-50 to-blue-300 dark:from-blue-800 dark:to-blue-900"
          } ${
            color === "red" &&
            "from-red-50 to-red-300 dark:from-red-800 dark:to-red-900"
          }`}
        >
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
          >
            <div className="sticky top-2 z-20">
              <Form />
            </div>
            <main>
              <section
                className={`grid grid-cols-2 h-80 w-full p-10  border-solid border-b ${
                  color === "blue" && "bg-blue-700 border-blue-500"
                } ${color === "red" && "bg-red-700 border-red-500"}`}
              >
                <div className="flex items-center justify-center rounded-md bg-black p-10">
                  4: Hero Shot Photo or Video
                </div>
              </section>
              <TestimonialsSlider />
              <section
                className={`grid grid-cols-2 p-10 text-2xl${
                  color === "blue" && "text-blue-50"
                } ${color === "red" && "text-red-50"}`}
              >
                <div className="mr-4">
                  <List />
                </div>
                <Testimonials />
              </section>

              <h2
                className={`flex items-center justify-center h-20 text-3xl  shadow-md ${
                  color === "blue" && "bg-blue-300"
                } ${color === "red" && "bg-red-300"}`}
              >
                1C: A reinforcement statemnt maintain interest
              </h2>
              <section>3</section>
              <h2
                className={`flex items-center justify-center h-20 text-3xl shadow-md ${
                  color === "blue" && "bg-blue-300"
                } ${color === "red" && "bg-red-300"}`}
              >
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
