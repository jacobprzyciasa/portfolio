import React from 'react'
import PhotoGallery from './PhotoGallery'
import type { Photo } from '@/utils/photos'

function Content({ photos }: { photos: Photo[] }) {
  return (
    <div className='w-full'>
        <PhotoGallery photoSet={photos} />
    </div>
  )
}

export default Content
