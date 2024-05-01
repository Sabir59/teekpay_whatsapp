'use client';

import styles from './styles.module.scss';
import createScn from '@/utils/scn';
import { Chat } from './chat';
import { chat } from './data';
import { ChatHeader } from './chatHeader';
import { users } from '../components/user/data';
import { useEffect, useState } from 'react';
import { StaticImageData } from 'next/image';

const scn = createScn(styles);

export const ChatPannel = ({ slug }: { slug: string }) => {
  const filteredChat = chat.filter((message) => message.slug === slug);

  const [name, setName] = useState('');
  const [image, setImage] = useState<string | StaticImageData>('');

  useEffect(() => {
    const filteredUser = users.filter((user) => user.slug === slug);
    if (filteredUser.length > 0) {
      const user = filteredUser[0]; // Assuming you want the first user
      setName(user?.name || ''); // Set default name if user?.name is undefined
      setImage(user?.image || ''); // Set image if it's a string
    }
  }, [slug]);

  return (
    <div className={`${scn('chatPannel')}`}>
      {/* {console.log(filterdUser)} */}
      <ChatHeader name={name} image={image} />
      <div className={`${scn('chatPannel__chat')} flex flex-col`}>
        {filteredChat.map(({ slug, message, isSender, timeStamp }) => (
          <Chat message={message} sender={isSender} timeStamp={timeStamp} key={name} />
        ))}
      </div>
    </div>
  );
};
