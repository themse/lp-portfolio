import { FC, useEffect, useState } from 'react';

import { useHistory } from 'common/history';
import { useTranslation } from 'react-i18next';

const languages = [
  {
    title: 'En',
    url: '/en',
  },
  {
    title: 'De',
    url: '/de',
  },
];

const defaultLang = languages[0].url;

export const LanguageSwitcher: FC = () => {
  const history = useHistory();
  const { location } = history;

  const { i18n } = useTranslation();

  const [currentLangUrl, setCurrentLangUrl] = useState(defaultLang);

  useEffect(() => {
    setCurrentLangUrl(
      location.pathname === '/' ? defaultLang : location.pathname
    );
  }, [location.pathname]);

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

  return (
    <ul className="flex">
      {languages.map(({ title, url }) => (
        <li
          key={url}
          className="after:content-['|'] after:px-2 last:after:content-[''] last:after:px-0"
        >
          <button
            className={url === currentLangUrl ? 'pointer-events-none' : ''}
            disabled={url === currentLangUrl}
            type="button"
            onClick={(): void => switchLang(url)}
          >
            <span
              className={`${
                currentLangUrl === url ? 'text-black' : 'text-tpl-grey-300'
              } uppercase`}
            >
              {title}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
};
