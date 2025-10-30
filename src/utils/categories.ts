import { StaticImageData } from "next/image";
import { peoplePhotos, Photo } from "./photos";
import AutodromSosnowiec from "../../public/Categories/AutodromSosnowiecLogo.png"
import WynajmijStudio from "../../public/Categories/WynajmijStudioLogo.jpg"

export interface Categories {
    title: string;
    src?: StaticImageData;
    url: string;
    photoSet: Photo[];
}

export const clients: Categories[] = [
    {
        title: "Autodrom Sosnowiec",
        src: AutodromSosnowiec,
        url: "clients/autodrom-sosnowiec",
        photoSet: peoplePhotos,
    },
    {
        title: "Wynajmij Studio",
        src: WynajmijStudio,
        url: "clients/wynajmij-studio",
        photoSet: peoplePhotos,
    },
    {
        title: "FD Studio",
        src: WynajmijStudio,
        url: "clients/fd-studio",
        photoSet: peoplePhotos,
    },
]