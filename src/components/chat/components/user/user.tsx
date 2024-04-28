import Image from 'next/image';
import React from 'react';
import userImage1 from '/public/assets/images/user-image-1.png';
import { userProps } from './types';

export const User = ({ image, name, message, time, messagesCount }: userProps) => {
  return (
    <div className='flex items-center gap-2 p-2 border-b cursor-pointer'>
      {/* Photo */}
      <div className='user__frame'>
        <Image src={image} width={50} height={50} alt='user' className='user__photo' />
      </div>
      {/* Content */}
      <div className='user__content flex-1 flex items-center justify-between gap-2'>
        <div className='user__details'>
          {/* Name */}
          <small className='user__name'>{name}</small>
          {/* Message */}
          <p className='user__message'>{message}</p>
        </div>
        <div className='user__info flex flex-col gap-1'>
          <small className='user__time'>{time}</small>
          <small className='user__messages'>{messagesCount}</small>
        </div>
      </div>
    </div>
  );
};
