'use client'

import React, { useState, useEffect } from 'react'
import { RiArrowRightWideFill, RiArrowLeftWideFill } from "react-icons/ri"
import Image from "next/image"
import PhotoGallery from "@/Components/PhotoGallery"
import type { Photo } from '@/utils/photos'

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
          className="fixed left-0 top-0 z-[9500] flex h-screen w-full items-center justify-center bg-obsidian/95 pt-10 pb-14 backdrop-blur-md"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close button */}
          <button
            onClick={() => setSlideShow(false)}
            className="absolute right-5 top-5 z-70 flex h-11 w-11 cursor-pointer items-center justify-center border border-linen/30 text-3xl font-light text-linen transition-colors hover:border-flare hover:bg-flare hover:text-obsidian"
            aria-label="Close"
          >
            ×
          </button>

          {/* Previous button */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 z-60 hidden aspect-square w-12 -translate-y-1/2 cursor-pointer items-center justify-center text-linen/70 transition-colors hover:text-flare md:left-8 md:flex"
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
                <span className="animate-pulse font-body text-xs uppercase tracking-mega text-khaki">
                  Loading...
                </span>
              </div>
            )}

            {selectedPhoto && (
              <Image
                key={selectedPhotoId}
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                sizes="100vw"
                className={`object-contain
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
            className="absolute right-3 top-1/2 z-60 hidden aspect-square w-12 -translate-y-1/2 cursor-pointer items-center justify-center text-linen/70 transition-colors hover:text-flare md:right-8 md:flex"
            aria-label="Next photo"
          >
            <RiArrowRightWideFill className="text-3xl group-hover:scale-110 transition-transform" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 z-60 -translate-x-1/2 border border-linen/20 bg-obsidian/80 px-4 py-2 font-body text-[10px] uppercase tracking-mega text-flare">
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
