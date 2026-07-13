import HomeClient from "@/Components/HomeClient";
import { getMainPagePhotos } from "@/utils/gallery";

export default function Home() {
  return <HomeClient photos={getMainPagePhotos()} />;
}
