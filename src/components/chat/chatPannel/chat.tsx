import Image from 'next/image';
import React from 'react';


interface chatProps {
  message: string;
  sender: string | 'user' | 'contact';
  timeStamp: string;
}

export const Chat = ({ message, sender, timeStamp }: chatProps) => {
  const isSender = sender === 'user';

  return (
    <div className={`flex ${isSender ? 'justify-start' : 'justify-end'}  mb-2 text-gray-700 rounded-lg `}>
      <div className={`${isSender ? 'bg-white' : 'bg-[#d9fdd3]'}  rounded-lg px-4 py-2 max-w-md flex flex-col gap-1`}>
        {message}
        <small className='block self-end'>{timeStamp}</small>
      </div>
    </div>
  );
};

export default Chat;
