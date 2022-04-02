import { FC, createContext, useContext, useState } from 'react';

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

  const openNav = (): void => setIsOpen(true);
  const closeNav = (): void => setIsOpen(false);

  return (
    <MobileNavCtx.Provider value={{ isOpen, openNav, closeNav }}>
      {children}
    </MobileNavCtx.Provider>
  );
};

export const useMobileNav = (): MobileNavCtxType => useContext(MobileNavCtx);
