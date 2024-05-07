import Chip from "@/components/Chip";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Model from "@/components/Model";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <Chip />
     
    </main>
  );
}
