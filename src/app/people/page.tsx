"use client";
import Footer from "@//Components/Footer";
import Header from "@//Components/Header";
import PhotoOverview from "@//Components/PhotoOverview";
import { peoplePhotos } from "@//utils/people";

function Page() {
  return (
    <div className="pt-40">
      <Header isScrolled={true} />
      <h2 className="font-volkhov py-5 text-2xl md:pl-40 pl-5">People</h2>
      <PhotoOverview photosArray={peoplePhotos} />
      <Footer />
    </div>
  );
}

export default Page;
