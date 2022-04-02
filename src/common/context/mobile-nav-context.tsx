import {
  FC,
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

import { useOverflowBody } from 'hooks/useOverflowBody';
import { useMediaQuery } from 'hooks/useMediaQuery';

type MobileNavCtxType = {
  isOpen: boolean;
  openNav: () => void;
  closeNav: () => void;
};

const defaultValue: MobileNavCtxType = {
  isOpen: false,
  openNav: () => {},
  closeNav: () => {},
};
const MobileNavCtx = createContext<MobileNavCtxType>(defaultValue);

export const MobileNavProvider: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setBodyOverflow, removeBodyOverflow } = useOverflowBody();

  const isSmallDevice = useMediaQuery('(max-width: 768px)');

  const openNav = (): void => {
    setIsOpen(true);
    setBodyOverflow();
  };

  const closeNav = useCallback((): void => {
    setIsOpen(false);
    removeBodyOverflow();
  }, [removeBodyOverflow]);

  useEffect(() => {
    if (!isSmallDevice) {
      closeNav();
    }
  }, [closeNav, isSmallDevice]);

  return (
    <MobileNavCtx.Provider value={{ isOpen, openNav, closeNav }}>
      {children}
    </MobileNavCtx.Provider>
  );
};

export const useMobileNav = (): MobileNavCtxType => useContext(MobileNavCtx);
