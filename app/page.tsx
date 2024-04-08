import About from "./components/About";
import Contact from "./components/Contact";
import Exp from "./components/Exp";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="custom-gradient w-screen h-screen fixed z-[-1]"></div>
      <div className="bg-[url(/bg.png)] w-screen h-screen fixed opacity-[10%] z-[-1]"></div>
      <Hero />
      <About />
      <Exp />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
