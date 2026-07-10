import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Image from "next/image";
import baner_me from "../../../public/baner_me.jpg";

function Page() {
  return (
    <div className="min-h-screen bg-obsidian pt-32 text-linen md:pt-40">
      <Header isScrolled={true} />
      <section className="mx-auto grid max-w-[1600px] gap-10 px-5 pb-20 md:grid-cols-12 md:px-10">
        <div className="md:col-span-7">
          <p className="font-body text-[10px] uppercase tracking-mega text-flare">/ About</p>
          <h1 className="mt-3 font-heading text-6xl uppercase leading-[0.9] text-linen md:text-8xl">
            Chasing light
            <br />
            through motion.
          </h1>
          <p className="mt-8 max-w-2xl font-body text-sm leading-relaxed text-khaki md:text-base">
            Hi, I&apos;m Jacob and I am a photographer from Poland. Since the age of
            15, I have been creating photos that reflect my style and help others
            in their projects. I have completed a professional portrait photography
            course and have been awarded in local and international photography
            competitions.
          </p>
          <p className="mt-4 max-w-2xl font-body text-sm leading-relaxed text-khaki md:text-base">
            In my photography journey I had a pleasure to work with firms like
            Autodrom Sosnowiec, Wynajmij Studio and FD Studio. If you need the
            highest quality photos for an event, project or just for fun, feel free
            to contact me.
          </p>
        </div>
        <div className="relative min-h-[520px] overflow-hidden md:col-span-5">
          <Image
            src={baner_me}
            alt="Jakub Przyciasa"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover object-[center_20%] grayscale-[15%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Page;
