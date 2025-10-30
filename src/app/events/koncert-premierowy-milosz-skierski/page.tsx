"use client";
import Footer from "@//Components/Footer";
import Header from "@//Components/Header";
import PhotoOverview from "@//Components/PhotoOverview";
import { events } from "@/utils/categories";

function Page() {
  return (
    <div className="pt-40">
      <Header isScrolled={true} />
      <h2 className="font-volkhov py-5 text-2xl md:pl-40 pl-5">{events[0].title}</h2>
      <PhotoOverview photosArray={events[0].photoSet} />
      <Footer />
    </div>
  );
}

export default Page;
