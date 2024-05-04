import React from 'react';
import styles from './styles.module.scss';
import Image, { StaticImageData } from 'next/image';
import { ChevronLeft, EllipsisVertical, Search } from 'lucide-react';
import createScn from '@/utils/scn';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useIsMobileScreen } from '@/hooks/useIsMobileScreen';
import backButtonIcon from '/public/assets/icons/chat/back.svg';

const scn = createScn(styles);

interface headerProps {
  image: string | StaticImageData;
  name: string;
}

export const ChatHeader = ({ image, name }: headerProps) => {
  const isMobileScreen = useIsMobileScreen();

  return (
    <div className={`${scn('chatPannel__header')}`}>
      <div className='chatPannel__header flex justify-between items-center gap-8'>
        <div className={`${scn('chatPannel__user')}`}>
          {isMobileScreen && (
            <Link href='/chat'>
              {/* <Button className='w-10 p-1'>
                <ChevronLeft />
              </Button> */}
              <Image src={backButtonIcon} alt='Back' />
            </Link>
          )}
          <Image className='chatPannel__image' src={image} alt='user' width={50} />
          <small className={`${scn('chatPannel__name')}`}>{name}</small>
        </div>
        <div className={`${scn('chatPannel__options')}`}>
          {!isMobileScreen && <Search />}
          <EllipsisVertical />
        </div>
      </div>
    </div>
  );
};
