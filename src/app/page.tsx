import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About_us from "./Components/About_us";
import Service from "./Components/Service";
import Quality from "./Components/Quality";
import Partner from "./Components/Partner";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About_us />
      <Service />
      <Quality />
      <Partner />
      <Contact />
      <Footer />
    </div>
  );
}
