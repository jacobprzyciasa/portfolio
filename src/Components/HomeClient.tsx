import HomeExperience from "@/Components/Portfolio/HomeExperience";
import type { Photo } from "@/utils/photos";

export default function HomeClient({ photos }: { photos: Photo[] }) {
  return <HomeExperience photos={photos} />;
}
