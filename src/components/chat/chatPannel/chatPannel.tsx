import Image from 'next/image';
import userImage1 from '/public/assets/images/user-image-1.png';
import { EllipsisVertical, Search } from 'lucide-react';

export const ChatPannel = () => {
  return (
    <div className='chatPannel'>
      <div className='chatPannel__header bg-slate-100 py-2 px-4'>
        <div className='chatPannel__header flex justify-between items-center gap-8'>
          <div className='chatPannel__user flex items-center gap-3'>
            <Image className='chatPannel__image' src={userImage1} alt='user' width={50} />
            <small className='chatPannel__name'>Sabir Nawaz</small>
          </div>
          <div className='flex gap-8 items-center text-gray-500'>
            <Search />
            <EllipsisVertical />
          </div>
        </div>
      </div>
    </div>
  );
};
