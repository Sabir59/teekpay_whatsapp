import React from 'react';
import styles from './styles.module.scss';
import Image, { StaticImageData } from 'next/image';
import userImage1 from '/public/assets/images/user-image-1.png';
import { EllipsisVertical, Search } from 'lucide-react';
import createScn from '@/utils/scn';
const scn = createScn(styles);

interface headerProps {
  image: string | StaticImageData;
  name: string;
}

export const ChatHeader = ({ image, name }: headerProps) => {
  return (
    <div className={`${scn('chatPannel__header')}`}>
      <div className='chatPannel__header flex justify-between items-center gap-8'>
        <div className={`${scn('chatPannel__user')}`}>
          <Image className='chatPannel__image' src={image} alt='user' width={50} />
          <small className={`${scn('chatPannel__name')}`}>{name}</small>
        </div>
        <div className={`${scn('chatPannel__options')}`}>
          <Search />
          <EllipsisVertical />
        </div>
      </div>
    </div>
  );
};
