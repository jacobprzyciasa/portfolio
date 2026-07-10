import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import PhotoOverview from "@/Components/PhotoOverview";
import ScrollToTop from "@/Components/ScrollToTop";
import { getGalleryCategories, getGalleryCategory } from "@/utils/gallery";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getGalleryCategories("events").map((category) => ({
    slug: category.slug,
  }));
}

async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getGalleryCategory("events", slug);

  if (!category) {
    notFound();
  }

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-obsidian pt-32 text-linen md:pt-40">
        <Header isScrolled={true} />
        <div className="px-5 pb-8 md:px-10">
          <p className="font-body text-[10px] uppercase tracking-mega text-flare">/ Event</p>
          <h2 className="font-heading py-3 text-5xl uppercase leading-none md:text-7xl">
            {category.title}
          </h2>
        </div>
        <PhotoOverview photosArray={category.photoSet} />
        <Footer />
      </div>
    </>
  );
}

export default Page;
