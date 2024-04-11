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
    <div className="absolute w-full z-10 bg-slate-50/90 dark:bg-gray-900/90 text-gray-900 dark:text-white">
      <Header />
      <div className="">
        <div className="grid place-content-center drop-shadow-none pt-40 pb-20 bg-gradient-to-bl from-blue-500/90 to-salmon/40">
          <FrontCover />
          <div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-salmon/90 pt-32 pb-8 pointer-events-none dark:from-gray-900 absolute"></div>
          <div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-slate-50/95 pt-24 pb-8 pointer-events-none dark:from-gray-900 absolute"></div>
        </div>
        {/* <div className="inset-x-0 top-0 flex justify-center bg-gradient-to-b from-slate-50/90 pt-32 pb-8 pointer-events-none dark:from-slate-900 absolute"></div> */}
        <div className="inset-x-0 flex justify-center bg-gradient-to-b from-slate-50/95 pt-16 pb-8 pointer-events-none dark:from-gray-900"></div>
      </div>

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
                    className="w-full h-full aspect-video rounded-lg border-none"
                    src="/promo.mp4"
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
