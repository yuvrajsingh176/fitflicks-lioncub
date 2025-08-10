import Image from "next/image";
import Navbar from "./components/site/Navbar";
import Hero from "./components/site/Hero";
import Programs from "./components/site/Programs";
import Highlights from "./components/site/Highlights";
import Gallery from "./components/site/Gallery";
import About from "./components/site/About";
import Pricing from "./components/site/Pricing";
import FAQ from "./components/site/FAQ";
import Contact from "./components/site/Contact";
import Footer from "./components/site/Footer";



export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main >
        <Hero />
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            // padding: "2rem",
            textAlign: "center",
          }}>
          <Programs />
          <Highlights />
          <About />
          <Gallery />
          <Pricing />
          <FAQ />
          <Contact />
        </div>
      </main>
      <Footer />
    </div >
  );
}
