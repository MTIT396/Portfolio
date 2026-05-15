import Header from "@/components/layouts/Header";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Porfolio from "@/components/sections/Porfolio";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Porfolio />
      <Contact />
    </div>
  );
}
