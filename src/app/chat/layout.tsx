'use client';

import { ChatPannel, Sidebar } from '@/components/chat';
import styles from './styles.module.scss';
import createScn from '@/utils/scn';

import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useIsMobileScreen } from '@/hooks/useIsMobileScreen';

const scn = createScn(styles);

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMobileScreen = useIsMobileScreen();
  const pathname = usePathname();

  return (
    <main className={`${scn('chat')}`}>
      <Sidebar />
      <div
        className={`${scn('chat__content')} ${
          isMobileScreen ? 'fixed w-[calc(100%-60px)] left-0 top-0 z-10 h-full !block ml-[60px]' : ''
        }`}
      >
        {children}
      </div>
    </main>
  );
}
