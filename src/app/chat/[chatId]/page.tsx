import { ChatPannel } from '@/components/chat';
import React from 'react';

const SingleChatPage = ({ params }: { params: { chatId: string } }) => {
  return (
    <>
      <ChatPannel slug={params.chatId} />;
    </>
  );
};

export default SingleChatPage;
