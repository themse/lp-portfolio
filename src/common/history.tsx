import { FC, createContext, useContext } from 'react';
import { createBrowserHistory, BrowserHistory } from 'history';

const history = createBrowserHistory();
const HistoryCtx = createContext<BrowserHistory>(history);

export const HistoryProvider: FC = ({ children }) => {
  return <HistoryCtx.Provider value={history}>{children}</HistoryCtx.Provider>;
};

export const useHistory = (): BrowserHistory => useContext(HistoryCtx);
