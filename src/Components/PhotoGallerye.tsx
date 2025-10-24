"use client";
import Image from 'next/image';
import { photos } from '@/utils/photos';
import { useState } from 'react';

export default function PhotoGallery() {
  const [hoveredPhoto, setHoveredPhoto] = useState<number | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
        {photos.map((photo) => (
          <div 
            key={photo.id} 
            className="aspect-3/4 relative cursor-pointer"
            onMouseEnter={() => setHoveredPhoto(photo.id)}
            onMouseLeave={() => setHoveredPhoto(null)}
            onMouseMove={handleMouseMove}
          >
            <a href={photo.category}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
