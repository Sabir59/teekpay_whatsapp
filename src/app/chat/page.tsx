import { ChatPannel } from '@/components/chat';

interface PageChatProps {
  slug: string;
}

export default function ageChat({ slug }: PageChatProps) {
  return (
    <main>
      <ChatPannel slug={slug} />
    </main>
  );
}
