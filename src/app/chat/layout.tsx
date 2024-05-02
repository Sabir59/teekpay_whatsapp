"use client"

import { ChatPannel, Sidebar } from '@/components/chat';
import styles from './styles.module.scss';
import createScn from '@/utils/scn';
import { useEffect, useState } from 'react';
import { useIsMobileScreen } from '../hooks/useIsMobileScreen';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const scn = createScn(styles);


export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 const isMobileScreen = useIsMobileScreen()
 const pathname = usePathname()


  return (
    <main className={`${scn('chat')}`}>
      <Sidebar />
      <div className={`${scn('chat__content')} ${isMobileScreen ? 'fixed left-0 top-0 z-10 w-full h-full !block' : ''}`}>
        {children}
      </div>
    </main>
  );
}
