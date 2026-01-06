import Footer from "@//Components/Footer";
import Header from "@//Components/Header";
import { events } from "@/utils/categories";
import PhotoOverview from "@/Components/PhotoOverview";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import CaseStudyHeader from "@/Components/CaseStudyHeader";
import ScrollToTop from "@/Components/ScrollToTop";

async function Page() {
  return (
    <>
    <ScrollToTop />
    <div className="pt-40">
      <Header isScrolled={true} />
      <h2 className="font-volkhov py-5 text-2xl md:pl-40 pl-5">
        {events[1].title}
      </h2>
      <PhotoOverview photosArray={events[1].photoSet} />
      <Footer />
    </div>
    </>
  );
}

export default Page;
