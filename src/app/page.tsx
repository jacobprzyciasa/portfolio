import HomeClient from "@/Components/HomeClient";
import { getMainPagePhotos } from "@/utils/gallery";

export const dynamic = "force-dynamic";

export default function Home() {
  return <HomeClient photos={getMainPagePhotos()} />;
}
