import photo1 from '../../public/1.jpg'
import photo2 from '../../public/5.jpg'
import photo3 from '../../public/61.jpg'
import { StaticImageData } from 'next/image';

export interface Photo {
  id: number;
  src: StaticImageData;
  alt: string;
  category: string;
}

export const photos: Photo[] = [
  { id: 1, src: photo1, alt: 'Photo 1', category: '/people' },
  { id: 2, src: photo2, alt: 'Photo 2', category: '/people' },
  { id: 3, src: photo3, alt: 'Photo 3', category: '/people' },
  { id: 4, src: photo1, alt: 'Photo 4', category: '/people' },
  { id: 5, src: photo2, alt: 'Photo 5', category: '/people' },
  { id: 6, src: photo3, alt: 'Photo 6', category: '/people' },
  { id: 7, src: photo1, alt: 'Photo 7', category: '/people' },
  { id: 8, src: photo2, alt: 'Photo 8', category: '/people' },
  { id: 9, src: photo3, alt: 'Photo 9', category: '/people' },
];