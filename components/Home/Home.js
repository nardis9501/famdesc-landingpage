import Form from "../Call-To-Action/Form";
import Header from "../Header/Header";
import { motion } from "framer-motion";
import Testimonials from "../Testimonials/Testimonials";
import List from "../BenefitsList/List";
import { useAppContext } from "@/app/providers";
import { fadeIn } from "@/utils/motionTransitions";
import TestimonialsSlider from "../Testimonials/TestimonialsSlider";
import FeatureCard from "../BenefitsList/FeatureCard";
import FrontCover from "../FrontCover/FrontCover";
import SponsorButton from "../sponsor/SponsorButton";
export default function Home(props) {
  const { color } = useAppContext();

  return (
    <div className="absolute w-full z-10 bg-slate-50/90 dark:bg-gray-900/70 text-gray-900 dark:text-white">
      <div
        className={`conteiner relative m-auto  md:max-w-[1200px]  rounded-lg selection:bg-salmon selection:text-bluePantone`}
      >
        <Header />
        <FrontCover />

        <div className={`flex flex-col items-center w-full`}>
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
                className={`md:grid md:grid-cols-2 items-cente md:place-content-center p-1 md:p-8 text-white ${
                  color === "blue" && "bg-blue-500 shadow-sm shadow-blue-500"
                } ${color === "red" && "bg-red-500"}`}
              >
                <div className="flex flex-col justify-center items-center">
                  <iframe
                    className="w-full h-full aspect-video rounded-lg"
                    src="/promo.mp4"
                    frameborder="0"
                  ></iframe>
                  <p className="p-2 font-semibold">Video of FamilyTree</p>
                </div>
              </section>
              <TestimonialsSlider />
              <section
                className={`grid grid-cols-1 md:grid-cols-2 p-2 md:p-4 ${
                  color === "blue" && "text-blue-50"
                } ${color === "red" && "text-red-50"}`}
              >
                <div className="md:mr-4 mb-4 md:mb-0 h-full">
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
              <section>
                <FeatureCard />
              </section>
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
    </div>
  );
}
