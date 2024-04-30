import Image from 'next/image';
import userImage1 from '/public/assets/images/user-image-1.png';
import { EllipsisVertical, Search } from 'lucide-react';
import styles from './styles.module.scss';
import createScn from '@/utils/scn';
import { Chat } from './chat';
import { chat } from './data';

const scn = createScn(styles);

export const ChatPannel = () => {
  return (
    <div className={`${scn('chatPannel')}`}>
      <div className={`${scn('chatPannel__header')}`}>
        <div className='chatPannel__header flex justify-between items-center gap-8'>
          <div className={`${scn('chatPannel__user')}`}>
            <Image className='chatPannel__image' src={userImage1} alt='user' width={50} />
            <small className={`${scn('chatPannel__name')}`}>Sabir Nawaz</small>
          </div>
          <div className={`${scn('chatPannel__options')}`}>
            <Search />
            <EllipsisVertical />
          </div>
        </div>
      </div>
      <div className={`${scn('chatPannel__chat')} flex flex-col`}>
        {chat.map(({ message, isSender, timeStamp }) => (
          <Chat message={message} sender={isSender} timeStamp={timeStamp} />
        ))}
      </div>
    </div>
  );
};
