import HomeClient from "@/Components/HomeClient";
import { getMainPagePhotos } from "@/utils/gallery";
import Image from "next/image";
import jp from "../../public/jp_linen.png"

export default function Home() {
  return <div className="w-screen h-screen flex flex-col gap-10 items-center justify-center relative">
    <Image
      src={jp}
      alt="Logo"
      width={50}
      height={50}
    />
    <p className="font-garamond text-2xl">Wrócę niebawem ;)</p>
  </div>;
  // return <HomeClient photos={getMainPagePhotos()} />;
}
