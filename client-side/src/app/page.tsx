import BounceText from "@/components/home/BounceText";
import Hero from "@/components/home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-screen">
      <Hero />
      <BounceText text="was it worth the recreate ?" />
    </section>
  );
}
