'use client'

import React, { useState, useEffect } from 'react'
import { RiArrowRightWideFill, RiArrowLeftWideFill } from "react-icons/ri"
import Image from "next/image"
import PhotoGallery from "@/Components/PhotoGallery"
import { Photo } from '@/utils/photos'

function PhotoOverview({ photosArray }: { photosArray: Photo[] }) {
  const [slideShow, setSlideShow] = useState(false)
  const [selectedPhotoId, setSelectedPhotoId] = useState<number>(1)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')

  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const [imageLoading, setImageLoading] = useState(true)

  const selectedPhoto = photosArray.find(photo => photo.id === selectedPhotoId)

  const handleNext = () => {
    setDirection('next')
    setSelectedPhotoId(prev =>
      prev === photosArray.length ? 1 : prev + 1
    )
  }

  const handlePrev = () => {
    setDirection('prev')
    setSelectedPhotoId(prev =>
      prev === 1 ? photosArray.length : prev - 1
    )
  }

  // Reset loading state when image changes
  useEffect(() => {
    setImageLoading(true)
  }, [selectedPhotoId])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'Escape') setSlideShow(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const minSwipeDistance = 50

    if (distance > minSwipeDistance) handleNext()
    if (distance < -minSwipeDistance) handlePrev()

    setTouchStart(0)
    setTouchEnd(0)
  }

  return (
    <>
      {slideShow && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-[#ffffffe0] backdrop-blur-sm
                     flex justify-center items-center z-50 pt-10 pb-14"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close button */}
          <button
            onClick={() => setSlideShow(false)}
            className="absolute top-4 right-4 z-70 text-gray-700 hover:text-black
                       transition-colors text-3xl font-light w-10 h-10
                       flex items-center justify-center cursor-pointer"
            aria-label="Close"
          >
            ×
          </button>

          {/* Previous button */}
          <button
            onClick={handlePrev}
            className="hidden md:flex absolute left-4 z-60 top-1/2 -translate-y-1/2
                       w-12 aspect-square items-center justify-center
                       text-gray-600 hover:text-black
                       bg-transparent hover:bg-white/50 rounded-full
                       transition-all duration-200 group cursor-pointer"
            aria-label="Previous photo"
          >
            <RiArrowLeftWideFill className="text-3xl group-hover:scale-110 transition-transform" />
          </button>

          {/* Image container */}
          <div className="relative w-full h-full flex items-center justify-center
                          overflow-hidden md:px-24 px-4">

            {/* Loading overlay */}
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="text-gray-600 text-lg animate-pulse">
                  Loading...
                </span>
              </div>
            )}

            {selectedPhoto && (
              <Image
                key={selectedPhotoId}
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className={`max-w-full max-h-full object-contain
                            animate-fade-slide-${direction}
                            transition-opacity duration-300
                            ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                priority
                onLoad={() => setImageLoading(false)}
              />
            )}
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="hidden md:flex absolute right-4 z-60 top-1/2 -translate-y-1/2
                       w-12 aspect-square items-center justify-center
                       text-gray-600 hover:text-black
                       bg-transparent hover:bg-white/50 rounded-full
                       transition-all duration-200 group cursor-pointer"
            aria-label="Next photo"
          >
            <RiArrowRightWideFill className="text-3xl group-hover:scale-110 transition-transform" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-60
                          bg-black/50 text-white px-4 py-2 rounded-full text-sm">
            {selectedPhotoId} / {photosArray.length}
          </div>
        </div>
      )}

      {/* Gallery */}
      <div className="w-full">
        <PhotoGallery
          photoSet={photosArray}
          setSlideShow={setSlideShow}
          setSelectedPhotoId={setSelectedPhotoId}
        />
      </div>
    </>
  )
}

export default PhotoOverview
