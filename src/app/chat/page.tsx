import { ChatPannel, Sidebar } from '@/components/chat';
import styles from './styles.module.scss';
import createScn from '@/utils/scn';

const scn = createScn(styles);

export default function PageChat() {
  return (
    <main className={`${scn('chat')}`}>
      <div className='max-w-[420px]'>
        <Sidebar />
      </div>
      <div className={`${scn('chat__content')}`}>
        <ChatPannel />
      </div>
    </main>
  );
}
