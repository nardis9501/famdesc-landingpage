"use client";

import Transition from "@/components/Transition/Transition";
import Providers, { useAppContext } from "./providers";
import Layout from "@/components/Home/Layout";

export default function Home() {
  return (
    <Providers>
      <Transition />
      <Layout />
    </Providers>
  );
}
