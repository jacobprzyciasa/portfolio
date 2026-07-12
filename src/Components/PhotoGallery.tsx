"use client";
import Image from "next/image";
import type { Photo } from "@/utils/photos";
import { useState, useEffect } from "react";

export default function PhotoGallery({
  photoSet,
  setSlideShow,
  setSelectedPhotoId,
}: {
  photoSet: Photo[];
  setSlideShow?: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedPhotoId?: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [loadedPhotos, setLoadedPhotos] = useState<Set<string>>(new Set());
  const [imageDelays, setImageDelays] = useState<Record<number, number>>({});

  useEffect(() => {
    const delays: Record<number, number> = {};
    photoSet.forEach(photo => {
      delays[photo.id] = Math.random() * 200; // Random delay between 0 and 200ms
    });
    setImageDelays(delays);
  }, [photoSet]);

  const handleImageLoad = (src: string) => {
    setLoadedPhotos((prev) => new Set(prev).add(src));
  };

  return (
    <div className="w-full bg-obsidian">
      <div className="grid grid-cols-1 gap-2 px-2 min-[470px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {photoSet.map((photo, index) => (
          <div
            key={photo.src}
            className="portfolio-gallery-card group relative aspect-3/4 cursor-pointer overflow-hidden bg-secondary"
            style={{ animationDelay: `${(index % 8) * 45}ms` }}
          >
            {setSlideShow ? (
              <button
                onClick={() => {setSelectedPhotoId!(photo.id); setSlideShow(true)}}
                data-cursor="viewfinder"
                data-cursor-label="VIEW"
                className="relative block h-full w-full cursor-pointer"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  unoptimized
                  className={`object-cover grayscale-[20%] brightness-90 transition-all duration-700 ease-in group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100 ${
                    loadedPhotos.has(photo.src) ? 'opacity-100' : 'opacity-0'
                  }`}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  onLoadingComplete={() => handleImageLoad(photo.src)}
                  style={{ transitionDelay: `${imageDelays[photo.id] || 0}ms` }}
                />
                <span className="absolute right-3 top-3 font-body text-[9px] uppercase tracking-mega text-linen/50">
                  No {String(index + 1).padStart(3, "0")}
                </span>
              </button>
            ) : (
              <a
                href={photo.category ?? "#"}
                data-cursor="viewfinder"
                data-cursor-label="OPEN"
                className="relative block h-full w-full cursor-pointer"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  unoptimized
                  className={`object-cover grayscale-[20%] brightness-90 transition-all duration-700 ease-in group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100 ${
                    loadedPhotos.has(photo.src) ? 'opacity-100' : 'opacity-0'
                  }`}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  onLoadingComplete={() => handleImageLoad(photo.src)}
                  style={{ transitionDelay: `${imageDelays[photo.id] || 0}ms` }}
                />
                <span className="absolute right-3 top-3 font-body text-[9px] uppercase tracking-mega text-linen/50">
                  No {String(index + 1).padStart(3, "0")}
                </span>
              </a>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </div>
  );
}
