import { FC, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useHistory } from 'common/history';

export const Nav: FC = () => {
  const { t } = useTranslation();

  const navigation = [
    {
      title: t('nav-home'),
      url: '#home',
    },
    {
      title: t('nav-about'),
      url: '#about-me',
    },
    {
      title: t('nav-skills'),
      url: '#skills',
    },
    {
      title: t('nav-portfolio'),
      url: '#portfolio',
    },
    {
      title: t('nav-contacts'),
      url: '#contacts',
    },
  ];

  const defaultHash = navigation[0].url;

  const [currentHash, setCurrentHash] = useState<string>(defaultHash);
  const history = useHistory();

  useEffect(() => {
    const clearListen = history.listen(({ location }) => {
      setCurrentHash(location.hash || defaultHash);
    });

    return () => {
      clearListen();
    };
  }, [defaultHash, history]);

  return (
    <nav className="pt-4 pb-6 mb-9 border-b border-tpl-grey-300">
      <ul className="flex flex-wrap justify-evenly md:justify-between">
        {navigation.map(({ title, url }) => (
          <li key={url} className="mb-1">
            <a
              href={url}
              className={
                currentHash === url ? 'cursor-default pointer-events-none' : ''
              }
            >
              <span
                className={`${
                  currentHash === url ? 'text-black' : 'text-tpl-grey-300'
                } text-lg font-secondary px-6 py-4`}
              >
                {title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
