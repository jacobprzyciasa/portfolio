"use client";
import Image from "next/image";
import { mainPagePhotos, Photo } from "@/utils/photos";
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
  const [loadedPhotos, setLoadedPhotos] = useState<Set<number>>(new Set());
  const [imageDelays, setImageDelays] = useState<Record<number, number>>({});

  useEffect(() => {
    const delays: Record<number, number> = {};
    photoSet.forEach(photo => {
      delays[photo.id] = Math.random() * 200; // Random delay between 0 and 200ms
    });
    setImageDelays(delays);
  }, [photoSet]);

  const handleImageLoad = (id: number) => {
    setLoadedPhotos((prev) => new Set(prev).add(id));
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 min-[470px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {photoSet.map((photo) => (
          <div
            key={photo.id}
            className="aspect-3/4 relative cursor-pointer"
          >
            {setSlideShow ? (
              <button onClick={() => {setSelectedPhotoId!(photo.id); setSlideShow(true)}} className="cursor-pointer">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className={`object-cover transition-opacity duration-500 ease-in ${
                    loadedPhotos.has(photo.id) ? 'opacity-100' : 'opacity-0'
                  }`}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  onLoadingComplete={() => handleImageLoad(photo.id)}
                  style={{ transitionDelay: `${imageDelays[photo.id] || 0}ms` }}
                />
              </button>
            ) : (
              <a href={photo.category} className="cursor-pointer">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className={`object-cover transition-opacity duration-500 ease-in ${
                    loadedPhotos.has(photo.id) ? 'opacity-100' : 'opacity-0'
                  }`}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  onLoadingComplete={() => handleImageLoad(photo.id)}
                  style={{ transitionDelay: `${imageDelays[photo.id] || 0}ms` }}
                />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
