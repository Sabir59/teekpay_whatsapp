import { useState, useEffect } from 'react';

export function useIsMobileScreen() {
  const [isMobileScreen, setIsMobileScreen] = useState(false); // Initial state doesn't matter since it'll be updated in useEffect

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 1024);
    };

    // Check if window is defined (ensures it's executed only in the client-side context)
    if (typeof window !== 'undefined') {
      setIsMobileScreen(window.innerWidth <= 1024); // Set initial state based on window size
      window.addEventListener('resize', handleResize);
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return isMobileScreen;
}
