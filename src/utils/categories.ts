import { StaticImageData } from "next/image";
import { peoplePhotos, Photo } from "./photos";
import { autodromSosnowiecPhotos } from "./clients/autodrom_sosnowiec"
import { miloszSkierskiPhotos } from "./milosz_skierski"
import { FDStudioPhotos } from "./fd_studio";

export interface Categories {
    title: string;
    url: string;
    photoSet: Photo[];
    coverPhoto: StaticImageData;
}

export const clients: Categories[] = [
    {
        title: "Autodrom Sosnowiec",
        url: "/clients/autodrom-sosnowiec",
        photoSet: autodromSosnowiecPhotos,
        coverPhoto: autodromSosnowiecPhotos[3].src,
    },
]

export const events: Categories[] = [
    {
        title: "KONCERT PREMIEROWY MIŁOSZ SKIERSKI",
        url: "/events/koncert-premierowy-milosz-skierski",
        photoSet: miloszSkierskiPhotos,
        coverPhoto: miloszSkierskiPhotos[29].src,
    },
    {
        title: "FD Studio",
        url: "/events/fd-studio",
        photoSet: FDStudioPhotos,
        coverPhoto: FDStudioPhotos[0].src,
    },
    {
        title: "Bailla Party",
        url: "/events/bailla-party",
        photoSet: 
        coverPhoto:
    }
]