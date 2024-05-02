import Header from "../Header/Header";
import { motion } from "framer-motion";
import Testimonials from "../Testimonials/Testimonials";
import List from "../BenefitsList/List";
import { useAppContext } from "@/app/providers";
import { fadeIn } from "@/utils/motionTransitions";
import TestimonialsSlider from "../Testimonials/TestimonialsSlider";
import FeatureCard from "../BenefitsList/FeatureCard";
import FrontCover from "../FrontCover/FrontCover";
import OpenSourceBanner from "../Banner/OpenSourceBanner";
import GridBackground from "../Grid-background/GridBackground";
import VideoSection from "../Video-Section/VideoSection";
import Footer from "../Footer/Footer";
export default function Home(props) {
  const { color } = useAppContext();

  return (
    <div className="font-sans absolute w-full z-10 bg-slate-50 dark:bg-slate-900 text-gray-900 dark:text-white text-xl lg:text-2xl overflow-hidden">
      <Header />
      <FrontCover />

      <div
        className={`conteiner relative m-auto mt-4 md:max-w-[1350px]  rounded-lg selection:bg-salmon selection:text-bluePantone`}
      >
        <div className={`flex flex-col items-center w-full`}>
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
          >
            <main>
              <GridBackground backdropBottom heroImageNumber={7}>
                <OpenSourceBanner />
                <VideoSection />
                <TestimonialsSlider />
              </GridBackground>
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
                Dive into Famdesc: Discover what awaits you!
              </h2>
              <section>
                <FeatureCard />
              </section>
              <h2
                className={`flex items-center justify-center h-20 text-3xl shadow-md ${
                  color === "blue" && "bg-blue-300"
                } ${color === "red" && "bg-red-300"}`}
              >
                Thank you for being part of the Famdesc startup!
              </h2>
            </main>

            <Footer />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
