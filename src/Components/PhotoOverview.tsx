import React from 'react'
import { RiArrowRightWideFill, RiArrowLeftWideFill } from "react-icons/ri";
import Image from "next/image";
import { useState, useEffect } from "react";
import PhotoGallery from "@/Components/PhotoGallery";
import { Photo } from '@/utils/photos';

function PhotoOverview({photosArray}: {photosArray: Photo[]}) {
    const [slideShow, setSlideShow] = useState<boolean>(false);
  const [selectedPhotoId, setSelectedPhotoId] = useState<number>(1);
  const [direction, setDirection] = useState('next');
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const selectedPhoto = photosArray.find(photo => photo.id === selectedPhotoId);

  const handleNext = () => {
    setDirection('next');
    setSelectedPhotoId(prev => 
      prev === photosArray.length ? 1 : prev + 1
    );
  };

  const handlePrev = () => {
    setDirection('prev');
    setSelectedPhotoId(prev => 
      prev === 1 ? photosArray.length : prev - 1
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSlideShow(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoId]);

  // Touch handlers for swipe
  const handleTouchStart = (e: any) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: any) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };
  return (
    <>
    {slideShow && <div 
        className="fixed top-0 left-0 w-full h-screen bg-[#ffffffe0] backdrop-blur-sm flex justify-center items-center z-50 pt-10 pb-14"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Close button */}
        <button
          onClick={() => setSlideShow(false)}
          className="absolute top-4 right-4 z-70 text-gray-700 hover:text-black transition-colors text-3xl font-light w-10 h-10 flex items-center justify-center"
          aria-label="Close"
        >
          ×
        </button>

        {/* Previous button - Desktop only */}
        <button
          onClick={handlePrev}
          className="hidden md:flex absolute left-4 z-60 top-1/2 -translate-y-1/2 
                     w-12 aspect-square
                     items-center justify-center
                     text-gray-600 hover:text-black
                     bg-transparent hover:bg-white/50
                     rounded-full
                     transition-all duration-200
                     group"
          aria-label="Previous photo"
        >
          <RiArrowLeftWideFill className="text-3xl group-hover:scale-110 transition-transform" />
        </button>

        {/* Image with animation */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden md:px-24 px-4">
          <Image
            key={selectedPhotoId}
            src={selectedPhoto!.src}
            alt={selectedPhoto!.alt}
            className={`max-w-full max-h-full object-contain
                       animate-fade-slide-${direction}`}
            priority
          />
        </div>

        {/* Next button - Desktop only */}
        <button
          onClick={handleNext}
          className="hidden md:flex absolute right-4 z-60 top-1/2 -translate-y-1/2 
                     w-12 aspect-square
                     items-center justify-center
                     text-gray-600 hover:text-black
                     bg-transparent hover:bg-white/50
                     rounded-full
                     transition-all duration-200
                     group"
          aria-label="Next photo"
        >
          <RiArrowRightWideFill className="text-3xl group-hover:scale-110 transition-transform" />
        </button>

        {/* Photo counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-60 
                        bg-black/50 text-white px-4 py-2 rounded-full text-sm">
          {selectedPhotoId} / {photosArray.length}
        </div>
      </div>}

      <div className="w-full">
        <PhotoGallery photoSet={photosArray} setSlideShow={setSlideShow} setSelectedPhotoId={setSelectedPhotoId} />
      </div></>
  )
}

export default PhotoOverview