import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import { optionsParticles } from "./particleOptions";
import { useAppContext } from "@/app/providers";

export default function Cover(props) {
  const { color } = useAppContext();
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };
  const options = useMemo(() => optionsParticles, []);
  if (init) {
    return (
      <div
        className={`fixed  dark:bg-gray-950 w-full h-full -z-50 mx-auto ${
          color === "blue"
            ? "bg-blue-800/50"
            : color === "red"
            ? "bg-red-700/30"
            : ""
        }`}
      >
        <Particles
          className="absolute  translate-z-0"
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
    );
  }
  return <></>;
}
