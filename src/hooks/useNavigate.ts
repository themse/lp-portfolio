import { useEffect, useState } from 'react';

import { useHistory } from 'common/history';
import { useScroll } from './useScroll';

type NavigateReturn = {
  currentHash: string;
};

export const useNavigate = (defaultHash: string): NavigateReturn => {
  const history = useHistory();
  useScroll();

  const [currentHash, setCurrentHash] = useState<string>(defaultHash);

  useEffect(() => {
    setCurrentHash(history.location.hash || defaultHash);
  }, [history.location.hash, defaultHash]);

  useEffect(() => {
    const clearListen = history.listen(({ location }) => {
      setCurrentHash(location.hash || defaultHash);
    });

    return () => {
      clearListen();
    };
  }, [defaultHash, history]);

  return { currentHash };
};
