import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useNavigate } from 'hooks/useNavigate';

export const Nav: FC = () => {
  const { t } = useTranslation();

  const navigation = [
    {
      title: t('nav-home'),
      hash: '#home',
    },
    {
      title: t('nav-about'),
      hash: '#about-me',
    },
    {
      title: t('nav-skills'),
      hash: '#skills',
    },
    {
      title: t('nav-portfolio'),
      hash: '#portfolio',
    },
    {
      title: t('nav-contacts'),
      hash: '#contacts',
    },
  ];

  const { currentHash } = useNavigate(navigation[0].hash);

  return (
    <nav className="pt-4 pb-6 border-b border-tpl-grey-300" id="navbar">
      <ul className="flex flex-wrap justify-evenly md:justify-between">
        {navigation.map(({ title, hash }) => {
          const isCurrentHash = hash === currentHash;

          return (
            <li key={hash} className="mb-1">
              <a
                href={hash}
                className={
                  isCurrentHash ? 'cursor-default pointer-events-none' : ''
                }
              >
                <span
                  className={`${
                    isCurrentHash ? 'text-black' : 'text-tpl-grey-300'
                  } text-lg font-secondary px-6 py-4`}
                >
                  {title}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
