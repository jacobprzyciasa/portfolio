import type { Photo } from "@/utils/photos";

export const BLOB_STORE_ID = "9uqxceq7vvlfskah";
export const BLOB_HOSTNAME =
  process.env.NEXT_PUBLIC_BLOB_HOSTNAME ??
  `${BLOB_STORE_ID}.public.blob.vercel-storage.com`;
export const BLOB_BASE_URL =
  process.env.NEXT_PUBLIC_BLOB_BASE_URL ?? `https://${BLOB_HOSTNAME}`;

export type ManagedSection = {
  title: string;
  folder: string;
  slug?: string;
  banner: string;
  photoCount: number;
  alt: string;
};

export const assetPath = (pathname: string) =>
  `${BLOB_BASE_URL}/${pathname.replace(/^\/+/, "")}`;

const range = (count: number) => Array.from({ length: count }, (_, index) => index + 1);

export const siteImages = {
  hero: assetPath("baner.jpg"),
  portrait: assetPath("me.jpg"),
};

export const clientLogos = [
  assetPath("Categories/AutodromSosnowiecLogo.png"),
  assetPath("Categories/WynajmijStudioLogo.png"),
  assetPath("Categories/FdStudio.png"),
  assetPath("Categories/starway.png"),
];

export const archiveSections = {
  home: {
    title: "Home",
    folder: "home",
    banner: "1.jpg",
    photoCount: 18,
    alt: "Portfolio photo",
  },
  people: {
    title: "People",
    folder: "people",
    banner: "1.jpg",
    photoCount: 28,
    alt: "Portrait photo",
  },
  cars: {
    title: "Cars",
    folder: "cars",
    banner: "4.jpg",
    photoCount: 24,
    alt: "Car photo",
  },
  places: {
    title: "Places",
    folder: "places",
    banner: "25.jpg",
    photoCount: 31,
    alt: "Travel photo",
  },
} satisfies Record<string, ManagedSection>;

export const eventSections = [
  {
    title: "Bailla Party",
    folder: "events/Bailla_Party",
    slug: "bailla-party",
    banner: "banner_1.jpg",
    photoCount: 52,
    alt: "Bailla Party event photo",
  },
  {
    title: "FD Studio",
    folder: "events/FD_Studio",
    slug: "fd-studio",
    banner: "banner_1.jpg",
    photoCount: 60,
    alt: "FD Studio event photo",
  },
  {
    title: "KONCERT PREMIEROWY MIŁOSZ SKIERSKI",
    folder: "events/KONCERT_PREMIEROWY_MIŁOSZ_SKIERSKI",
    slug: "koncert-premierowy-milosz-skierski",
    banner: "banner_1.jpg",
    photoCount: 28,
    alt: "Koncert premierowy event photo",
  },
  {
    title: "Miłosz Skierski eksperyment Concert",
    folder: "events/Miłosz_Skierski_eksperyment_Concert",
    slug: "milosz-skierski-eksperyment-concert",
    banner: "banner_1.jpg",
    photoCount: 28,
    alt: "Miłosz Skierski concert photo",
  },
] satisfies ManagedSection[];

export const projectSections = [
  {
    title: "Autodrom Sosnowiec",
    folder: "projects/Autodrom_Sosnowiec",
    slug: "autodrom-sosnowiec",
    banner: "banner_1.jpg",
    photoCount: 20,
    alt: "Autodrom Sosnowiec project photo",
  },
] satisfies ManagedSection[];

export const navImages = {
  work: siteImages.hero,
  people: assetPath(`${archiveSections.people.folder}/${archiveSections.people.banner}`),
  events: assetPath(`${eventSections[1].folder}/${eventSections[1].banner}`),
  cars: assetPath(`${archiveSections.cars.folder}/${archiveSections.cars.banner}`),
  places: assetPath(`${archiveSections.places.folder}/${archiveSections.places.banner}`),
  projects: assetPath(`${projectSections[0].folder}/${projectSections[0].banner}`),
  contact: siteImages.portrait,
};

export function photosFromSection(section: ManagedSection): Photo[] {
  return range(section.photoCount).map((id) => ({
    id,
    src: assetPath(`${section.folder}/${id}.jpg`),
    alt: section.alt,
  }));
}
