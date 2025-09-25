import { useEffect, useState } from 'react';

export const useActiveSection = (sectionIds: string[]) => {
  const [activeId, setActiveId] = useState<string>('');

  const isInView = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  };

  useEffect(() => {
    const rootElement = document.getElementById('root');
    if (!rootElement) return;

    const handleScroll = () => {
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        if (isInView(el)) {
          setActiveId(id);
          break; // first visible section wins
        }
      }
    };

    rootElement.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run on mount

    return () => {
      rootElement.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds]);

  return activeId;
};
