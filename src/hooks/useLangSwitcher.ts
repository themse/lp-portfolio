import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useHistory } from 'common/history';

type LangSwitcherReturn = {
  currentLangUrl: string;
  switchLang: (url: string) => void;
};

export const useLangSwitcher = (defaultLang: string): LangSwitcherReturn => {
  const { i18n } = useTranslation();
  const history = useHistory();
  const { location } = history;

  const [currentLangUrl, setCurrentLangUrl] = useState(defaultLang);

  useEffect(() => {
    setCurrentLangUrl(
      location.pathname === '/' ? defaultLang : location.pathname
    );
  }, [location.pathname, defaultLang]);

  useEffect(() => {
    const currentLang = currentLangUrl.replace('/', '');

    if (i18n.language !== currentLang) {
      i18n.changeLanguage(currentLang);
    }
  }, [currentLangUrl, i18n]);

  const switchLang = (url: string): void => {
    setCurrentLangUrl(url);
    history.push(url);
  };

  return { currentLangUrl, switchLang };
};
