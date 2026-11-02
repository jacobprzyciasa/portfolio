import HomeClient from "@/Components/HomeClient";
import { getMainPagePhotos } from "@/utils/gallery";
import Image from "next/image";
import jp from "../../public/jp_linen.png"

export default function Home() {
  return <HomeClient photos={getMainPagePhotos()} /> ;
}
