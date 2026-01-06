import { StaticImageData } from 'next/image';
import photo1 from '../../public/People/16.jpg'
import photo2 from '../../public/Fd_studio/zabierzow_436.jpg'
import photo3 from '../../public/Cars/lambo_usa_1.jpg'
import photo4 from '../../public/Concerts/1.jpg'
import photo5 from '../../public/Cars/porsche_france_yellow.jpg'
import photo6 from '../../public/Concerts/27.jpg'
import photo7 from '../../public/People/24.jpg'
import photo8 from '../../public/Places/11.jpg'
import photo9 from '../../public/People/26.jpg'
import photo10 from '../../public/People/4.jpg'
import photo11 from '../../public/Concerts/11.jpg'
import photo12 from '../../public/People/21.jpg'
import photo13 from '../../public/Places/25.jpg'
import photo14 from '../../public/People/22.jpg'
import photo15 from '../../public/People/10.jpg'
import photo16 from '../../public/Fd_studio/wieliczka_437.jpg'

export interface Photo {
  id: number;
  src: StaticImageData;
  alt: string;
  category?: string;
}

export const mainPagePhotos: Photo[] = [
  { id: 1, src: photo1, alt: 'Photo 1', category: '/people' },
  { id: 2, src: photo2, alt: 'Photo 2', category: '/events/fd-studio' },
  { id: 3, src: photo3, alt: 'Photo 3', category: '/cars' },
  { id: 4, src: photo4, alt: 'Photo 4', category: '/events/koncert-premierowy-milosz-skierski' },
  { id: 5, src: photo5, alt: 'Photo 5', category: '/cars' },
  { id: 6, src: photo6, alt: 'Photo 6', category: '/events/koncert-premierowy-milosz-skierski' },
  { id: 7, src: photo7, alt: 'Photo 7', category: '/people' },
  { id: 8, src: photo8, alt: 'Photo 8', category: '/places' },
  { id: 9, src: photo9, alt: 'Photo 9', category: '/people' },
  { id: 10, src: photo10, alt: 'Photo 10', category: '/people' },
  { id: 11, src: photo11, alt: 'Photo 11', category: '/events/koncert-premierowy-milosz-skierski' },
  { id: 12, src: photo12, alt: 'Photo 12', category: '/people' },
  { id: 13, src: photo13, alt: 'Photo 13', category: '/places' },
  { id: 14, src: photo14, alt: 'Photo 14', category: '/people' },
  { id: 15, src: photo15, alt: 'Photo 15', category: '/people' },
  { id: 16, src: photo16, alt: 'Photo 16', category: '/events/fd-studio' },
];

export const peoplePhotos: Photo[] = [
  { id: 1, src: photo1, alt: 'Photo 1' },
  { id: 2, src: photo2, alt: 'Photo 2' },
  { id: 3, src: photo3, alt: 'Photo 3' },
  { id: 4, src: photo4, alt: 'Photo 4' },
  { id: 5, src: photo5, alt: 'Photo 5' },
  { id: 6, src: photo6, alt: 'Photo 6' },
  { id: 7, src: photo7, alt: 'Photo 7' },
  { id: 8, src: photo8, alt: 'Photo 8' },
  { id: 9, src: photo9, alt: 'Photo 9' },
  { id: 10, src: photo10, alt: 'Photo 10' },
  { id: 11, src: photo11, alt: 'Photo 11' },
  { id: 12, src: photo12, alt: 'Photo 12' },
  { id: 13, src: photo13, alt: 'Photo 13' },
  { id: 14, src: photo14, alt: 'Photo 14' },
  { id: 15, src: photo15, alt: 'Photo 15' },
  { id: 16, src: photo16, alt: 'Photo 16' },
  { id: 17, src: photo16, alt: 'Photo 16' },
  { id: 18, src: photo16, alt: 'Photo 16' },
  { id: 19, src: photo16, alt: 'Photo 16' },
  { id: 20, src: photo16, alt: 'Photo 16' },
  { id: 21, src: photo16, alt: 'Photo 16' },
  { id: 22, src: photo16, alt: 'Photo 16' },
  { id: 23, src: photo16, alt: 'Photo 16' },
]