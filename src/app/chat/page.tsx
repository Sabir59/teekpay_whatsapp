import { ChatPannel } from '@/components/chat';

interface pageChatProps {
  slug: string;
}

export default function PageChat({ slug }: pageChatProps) {
  return (
    <main>
      <ChatPannel slug={slug} />
    </main>
  );
}
