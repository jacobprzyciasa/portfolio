import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Image from "next/image";
import baner_me from "../../../public/me.jpg";

function Page() {
  return (
    <div className="min-h-screen bg-obsidian pt-32 text-linen md:pt-40">
      <Header isScrolled={true} />
      <section className="mx-auto grid max-w-[1600px] gap-10 px-5 pb-20 md:grid-cols-12 md:px-10">
        <div className="md:col-span-7">
          <p className="font-body text-[10px] uppercase tracking-mega text-flare">/ About</p>
          <p className="mt-8 max-w-2xl font-body text-sm leading-relaxed text-khaki md:text-base">
            Hi, I&apos;m Jacob and I am photographer from Poland. Since the age of 15, I have been creating photos that reflect my style, tell stories and help others in their various projects. I have completed a professional portrait photography course and have been awarded in local and international photography competitions. In my photography journey I had a pleasure to work with firms like Autodrom Sosnowiec, FD Studio, Starway Studio and many others.
          </p>
          <p className="mt-4 max-w-2xl font-body text-sm leading-relaxed text-khaki md:text-base">
            If you need the highest quality shots for an event, project or just for fun, feel free to contact me. Together, we will create amazing things!
          </p>
        </div>
        <div className="relative min-h-[520px] overflow-hidden md:col-span-5">
          <Image
            src={baner_me}
            alt="Jacob Przyciasa"
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
