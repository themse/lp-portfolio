import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = (): void => setMatches(media.matches);
    try {
      media.addEventListener('change', listener);
    } catch (error) {
      // Safari doesn't support addEventListener
      media.addListener(listener);
    }

    return () => {
      try {
        media.removeEventListener('change', listener);
      } catch (error) {
        // Safari doesn't support addEventListener
        media.removeListener(listener);
      }
    };
  }, [matches, query]);

  return matches;
};
