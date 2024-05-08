import { useAppContext } from "@/app/providers";
import { benefits, features } from "./list.data";
import Image from "next/image";
import GridBackground from "../Grid-background/GridBackground";
import QuoteBanner from "./QuoteBanner";
import FeatureSection from "./FeatureSection";

export default function FeatureCard(props) {
  let counter = 0;

  return (
    <>
      {benefits.map(({ id, shortTitle, text1, text2, img, phrase }, index) => {
        counter = counter + 1;
        return (
          <div key={id}>
            <GridBackground
              backdropTop
              backdropBottom
              heroImageNumber={counter}
            >
              <FeatureSection
                id={counter}
                shortTitle={shortTitle}
                imgUrl={img}
                text1={text1}
                text2={text2}
              />
              <QuoteBanner phrase={phrase} />
            </GridBackground>
          </div>
        );
      })}
    </>
  );
}
