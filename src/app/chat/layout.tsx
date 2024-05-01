import { ChatPannel, Sidebar } from '@/components/chat';
import styles from './styles.module.scss';
import createScn from '@/utils/scn';

const scn = createScn(styles);


export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`${scn('chat')}`}>
      <Sidebar />
      <div className={`${scn('chat__content')}`}>
        {children}
      </div>
    </main>
  );
}
