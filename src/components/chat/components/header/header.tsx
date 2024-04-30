import { EllipsisVertical, MessageSquareDiff } from 'lucide-react';
import React from 'react';

export const Header = () => {
  return (
    <div className='header flex justify-between gap-8 items-center p-5'>
      <p className='header__title text-slate-800 font-medium text-xl'>Chat</p>
      <div className='header__options flex gap-5 items-center text-gray-500'>
        <MessageSquareDiff />
        <EllipsisVertical />
      </div>
    </div>
  );
};
