import Footer from "@//Components/Footer";
import Header from "@//Components/Header";
import { clients } from "@/utils/categories";
import PhotoOverview from "@/Components/PhotoOverview";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import CaseStudyHeader from "@/Components/CaseStudyHeader";
import ScrollToTop from "@/Components/ScrollToTop";

async function Page() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/clients");
  }

  return (
    <>
      <ScrollToTop />
    <div className="pt-40">
      <CaseStudyHeader />
      <h2 className="font-volkhov py-5 text-2xl md:pl-40 pl-5">
        {clients[1].title}
      </h2>
      <PhotoOverview photosArray={clients[1].photoSet} />
      <Footer />
    </div>
    </>
  );
}

export default Page;
