"use client"

import React, { ReactNode, createContext, useContext, useState } from 'react';

interface ChatToggleContextType {
  isToggled: boolean;
  setToggled: (value: boolean) => void;
}

const ChatToggleContext = createContext<ChatToggleContextType | undefined>(undefined);

export const useChatToggle = () => {
  const context = useContext(ChatToggleContext);
  if (!context) {
    throw new Error('useChatToggle must be used within a ChatToggleProvider');
  }
  return context;
};

export const ChatToggleProvider = ({ children }: { children: ReactNode }) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const setToggled = (value: boolean) => setIsToggled(value);

  const value: ChatToggleContextType = {
    isToggled,
    setToggled,
  };

  return (
    <ChatToggleContext.Provider value={value}>
      {children}
    </ChatToggleContext.Provider>
  );
};
