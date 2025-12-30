import BounceText from "@/components/home/BounceText";
import DemoTerminal from "@/components/home/DemoTerminal";
import Hero from "@/components/home/Hero";
import HoverGrid from "@/components/home/HoverGrid";
import TechStack from "@/components/home/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full">
      <Hero />
      <HoverGrid />
      <TechStack />
      <DemoTerminal />
      {/* <div className="h-dvh"></div> */}
      <BounceText text="was it worth the recreate ?" />
    </section>
  );
}
