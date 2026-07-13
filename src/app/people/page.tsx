import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import PhotoOverview from "@/Components/PhotoOverview";
import { getPhotosFromFolder } from "@/utils/gallery";

function Page() {
  return (
    <div className="min-h-screen bg-obsidian pt-32 text-linen md:pt-40">
      <Header isScrolled={true} />
      <div className="px-5 pb-8 md:px-10">
        <p className="font-body text-[10px] uppercase tracking-mega text-flare">/ Archive</p>
        <h2 className="font-heading py-3 text-5xl uppercase leading-none md:text-7xl">People</h2>
      </div>
      <PhotoOverview photosArray={getPhotosFromFolder("people", "Portrait photo")} />
      <Footer />
    </div>
  );
}

export default Page;
