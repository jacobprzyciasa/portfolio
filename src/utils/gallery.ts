import {
  archiveSections,
  assetPath,
  eventSections,
  type ManagedSection,
  photosFromSection,
  projectSections,
} from "@/config/media";
import { Photo } from "./photos";

export interface Category {
  title: string;
  url: string;
  photoSet: Photo[];
  coverPhoto: string;
  slug: string;
}

const SECTION_BY_FOLDER = Object.values(archiveSections).reduce<Record<string, ManagedSection>>(
  (sections, section) => ({
    ...sections,
    [section.folder]: section,
  }),
  {}
);

function naturalCompare(a: string, b: string) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

function toCategory(type: "events" | "projects", section: ManagedSection): Category {
  const slug = section.slug ?? section.folder.split("/").at(-1) ?? section.title;

  return {
    title: section.title,
    url: `/${type}/${slug}`,
    photoSet: photosFromSection(section),
    coverPhoto: assetPath(`${section.folder}/${section.banner}`),
    slug,
  };
}

export function getPhotosFromFolder(folder: string, alt = "Photo"): Photo[] {
  const section = SECTION_BY_FOLDER[folder];

  if (!section) {
    return [];
  }

  return photosFromSection({ ...section, alt });
}

export function getMainPagePhotos(): Photo[] {
  const photos = photosFromSection(archiveSections.home);
  const categoryById: Record<number, string> = {
    1: "/people",
    2: "/events/fd-studio",
    3: "/cars",
    4: "/events/koncert-premierowy-milosz-skierski",
    5: "/cars",
    6: "/events/bailla-party",
    7: "/people",
    8: "/people",
    9: "/people",
    10: "/people",
    11: "/events/fd-studio",
    12: "/cars",
    13: "/events/bailla-party",
    14: "/events/koncert-premierowy-milosz-skierski",
    15: "/people",
    16: "/events/koncert-premierowy-milosz-skierski",
    17: "/people",
    18: "/events/fd-studio",
  };

  return photos.map((photo) => ({
    ...photo,
    category: categoryById[photo.id] ?? "/",
  }));
}

export function getGalleryCategories(type: "events" | "projects"): Category[] {
  const sections = type === "events" ? eventSections : projectSections;

  return sections.map((section) => toCategory(type, section)).sort((a, b) => naturalCompare(a.title, b.title));
}

export function getGalleryCategory(type: "events" | "projects", slug: string) {
  return getGalleryCategories(type).find((category) => category.slug === slug);
}
