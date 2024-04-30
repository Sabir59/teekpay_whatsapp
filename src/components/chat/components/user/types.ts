import { StaticImageData } from 'next/image';

export interface userProps {
  image: string | StaticImageData;
  name: string;
  message: string;
  time: string;
  // messagesCount: number;
}
