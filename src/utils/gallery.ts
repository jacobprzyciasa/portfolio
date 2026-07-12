import fs from "node:fs";
import path from "node:path";

import { Photo } from "./photos";

export interface Category {
  title: string;
  url: string;
  photoSet: Photo[];
  coverPhoto: string;
  slug: string;
}

const PUBLIC_DIR = path.join(process.cwd(), "public");
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

function toPublicUrl(filePath: string) {
  return `/${path.relative(PUBLIC_DIR, filePath).split(path.sep).join("/")}`;
}

function isImage(fileName: string) {
  return IMAGE_EXTENSIONS.has(path.extname(fileName).toLowerCase());
}

function naturalCompare(a: string, b: string) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

function slugify(value: string) {
  return value
    .replace(/[łŁ]/g, "l")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/_/g, "-")
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function titleFromFolder(folderName: string) {
  return folderName.replace(/_/g, " ");
}

function readDirectory(dir: string) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs.readdirSync(dir, { withFileTypes: true });
}

function readImageFiles(dir: string) {
  return readDirectory(dir)
    .filter((entry) => entry.isFile() && isImage(entry.name))
    .map((entry) => entry.name)
    .sort(naturalCompare);
}

export function getPhotosFromFolder(folder: string, alt = "Photo"): Photo[] {
  const dir = path.join(PUBLIC_DIR, folder);

  return readImageFiles(dir)
    .filter((fileName) => !fileName.toLowerCase().startsWith("banner_"))
    .map((fileName, index) => ({
      id: index + 1,
      src: toPublicUrl(path.join(dir, fileName)),
      alt,
    }));
}

export function getMainPagePhotos(): Photo[] {
  const photos = getPhotosFromFolder("home", "Portfolio photo");
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
  const baseDir = path.join(PUBLIC_DIR, type);

  return readDirectory(baseDir)
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const folder = `${type}/${entry.name}`;
      const dir = path.join(PUBLIC_DIR, folder);
      const title = titleFromFolder(entry.name);
      const photos = getPhotosFromFolder(folder, title);
      const banner = readImageFiles(dir).find((fileName) =>
        fileName.toLowerCase().startsWith("banner_")
      );
      const coverPhoto = banner
        ? toPublicUrl(path.join(dir, banner))
        : photos[0]?.src ?? "";
      const slug = slugify(entry.name);

      return {
        title,
        url: `/${type}/${slug}`,
        photoSet: photos,
        coverPhoto,
        slug,
      };
    })
    .filter((category) => category.coverPhoto && category.photoSet.length > 0)
    .sort((a, b) => naturalCompare(a.title, b.title));
}

export function getGalleryCategory(type: "events" | "projects", slug: string) {
  return getGalleryCategories(type).find((category) => category.slug === slug);
}
