"use client";

import Transition from "@/components/Transition/Transition";
import Providers from "./providers";
import Home from "@/components/Home/Home";
import Cover from "@/components/Cover/Cover";

export default function App() {
  return (
    <Providers>
      <Transition />
      <Cover />
      <Home />
    </Providers>
  );
}
