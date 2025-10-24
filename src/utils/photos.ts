import { StaticImageData } from 'next/image';
import photo1 from '../../public/People/16.jpg'
import photo2 from '../../public/People/2.jpg'
import photo3 from '../../public/Cars/1.jpg'
import photo4 from '../../public/Concerts/1.jpg'
import photo5 from '../../public/Cars/16.jpg'
import photo6 from '../../public/Concerts/27.jpg'
import photo7 from '../../public/Concerts/5.jpg'
import photo8 from '../../public/Places/11.jpg'
import photo9 from '../../public/Places/25.jpg'
import photo10 from '../../public/People/6.jpg'
import photo11 from '../../public/People/9.jpg'
import photo12 from '../../public/People/21.jpg'
import photo13 from '../../public/Cars/18.jpg'
import photo14 from '../../public/People/22.jpg'
import photo15 from '../../public/People/10.jpg'
import photo16 from '../../public/Concerts/11.jpg'

export interface Photo {
  id: number;
  src: StaticImageData;
  alt: string;
  category: string;
}

export const mainPagePhotos: Photo[] = [
  { id: 1, src: photo1, alt: 'Photo 1', category: '/people' },
  { id: 2, src: photo2, alt: 'Photo 2', category: '/people' },
  { id: 3, src: photo3, alt: 'Photo 3', category: '/people' },
  { id: 4, src: photo4, alt: 'Photo 4', category: '/people' },
  { id: 5, src: photo5, alt: 'Photo 5', category: '/people' },
  { id: 6, src: photo6, alt: 'Photo 6', category: '/people' },
  { id: 7, src: photo7, alt: 'Photo 7', category: '/people' },
  { id: 8, src: photo8, alt: 'Photo 8', category: '/people' },
  { id: 9, src: photo9, alt: 'Photo 9', category: '/people' },
  { id: 10, src: photo10, alt: 'Photo 10', category: '/people' },
  { id: 11, src: photo11, alt: 'Photo 11', category: '/people' },
  { id: 12, src: photo12, alt: 'Photo 12', category: '/people' },
  { id: 13, src: photo13, alt: 'Photo 13', category: '/people' },
  { id: 14, src: photo14, alt: 'Photo 14', category: '/people' },
  { id: 15, src: photo15, alt: 'Photo 15', category: '/people' },
  { id: 16, src: photo16, alt: 'Photo 16', category: '/people' },
];