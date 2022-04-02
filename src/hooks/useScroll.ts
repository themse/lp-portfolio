import { useEffect } from 'react';

import { useHistory } from 'common/history';

export const useScroll = (): void => {
  const history = useHistory();

  useEffect(() => {
    //   HACK
    setTimeout(() => {
      const navbarEl = document.getElementById('navbar');
      const navbarHeight = navbarEl?.getBoundingClientRect().height ?? 0;

      const elId = history.location.hash.replace('#', '');
      const element = document.getElementById(elId);
      const topPosition = element?.getBoundingClientRect().top ?? 0;

      if (topPosition > 10) {
        window.scrollTo({
          top: topPosition - navbarHeight,
        });
      }
    }, 500);
  }, []);
};
