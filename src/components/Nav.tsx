import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useNavigate } from 'hooks/useNavigate';
import { useMobileNav } from 'common/context/mobile-nav-context';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { LanguageSwitcher } from 'app/components/LanguageSwitcher';
import { Icon } from './Icon';

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

  const { isOpen, closeNav } = useMobileNav();
  const isSmallDevice = useMediaQuery('(max-width: 768px)');

  return (
    <nav
      className={`${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transform md:translate-x-0 transition duration-500 ease-in-out min-w-[320px] h-screen md:h-auto flex items-baseline justify-between md:block fixed md:static top-0 right-0 left-0 bottom-0 py-16 px-6 md:pt-4 md:pb-6 bg-white md:bg-transparent md:border-b md:border-tpl-grey-300 z-20`}
      id="navbar"
    >
      <ul className="flex flex-col md:flex-row flex-wrap md:justify-between space-y-16 md:space-y-0">
        {navigation.map(({ title, hash }) => {
          const isCurrentHash = hash === currentHash;

          return (
            <li key={hash} className="mb-1">
              <a
                href={hash}
                onClick={(): void => {
                  closeNav();
                }}
                className={
                  isCurrentHash ? 'cursor-default pointer-events-none' : ''
                }
              >
                <span
                  className={`${
                    isCurrentHash ? 'text-black' : 'text-tpl-grey-300'
                  } text-3xl md:text-lg font-secondary px-6 py-4`}
                >
                  {title}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className="md:hidden z-20"
        onClick={(): void => closeNav()}
      >
        <span className="sr-only">Close main menu</span>
        <Icon
          width={30}
          height={30}
          title="menu-close"
          src="/icons/close.svg"
        />
      </button>
      {isSmallDevice && (
        <div className="absolute bottom-28 right-6 rotate-90">
          <LanguageSwitcher />
        </div>
      )}
    </nav>
  );
};
