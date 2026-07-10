import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Gallery from "@/components/portfolio/Gallery";
import About from "@/components/portfolio/About";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import CustomCursor from "@/components/portfolio/CustomCursor";
import ShutterReveal from "@/components/portfolio/ShutterReveal";
import Marquee from "@/components/portfolio/Marquee";
import { IMAGES } from "@/components/portfolio/photos";

export default function Home() {
  return (
    <div id="top" className="grain relative min-h-screen bg-obsidian">
      <CustomCursor />
      <ShutterReveal />
      <Navbar />
      <Hero heroImage={IMAGES.hero} />

      <div className="border-y border-linen/10 bg-flare py-4 text-obsidian">
        <Marquee speed={28}>
          <span className="flex items-center">
            {["Available for Commissions", "Automotive", "Editorial", "Portrait", "Landscape", "Worldwide"].map((t) => (
              <span key={t} className="flex items-center">
                <span className="px-6 font-heading text-lg uppercase tracking-wide">{t}</span>
                <span className="text-2xl">✦</span>
              </span>
            ))}
          </span>
        </Marquee>
      </div>

      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}