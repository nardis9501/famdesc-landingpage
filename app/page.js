"use client";

import Transition from "@/components/Transition/Transition";
import Providers from "./providers";
import Home from "@/components/Home/Home";

export default function App() {
  return (
    <Providers>
      <Transition />
      <Home />
    </Providers>
  );
}
