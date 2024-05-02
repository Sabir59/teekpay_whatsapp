"use client"


import { ChatPannel } from '@/components/chat';
import { useRouter } from 'next/navigation'; // Import useRouter from 'next/router'

export default function PageChat() {
  const router = useRouter(); // Initialize useRouter
  const slug = router.prefetch.name; // Retrieve the slug parameter from the router query

  return (
    <main>
      {slug && <ChatPannel slug={slug } />} {/* Render ChatPannel only if slug is available */}
    </main>
  );
}
