import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from 'components/Container';
import { LanguageSwitcher } from 'app/components/LanguageSwitcher';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { useMobileNav } from 'common/context/mobile-nav-context';
import { Icon } from 'components/Icon';

export const Hero: FC = () => {
  const { t } = useTranslation();

  const isSmallDevice = useMediaQuery('(max-width: 768px)');

  const { isOpen, openNav } = useMobileNav();

  return (
    <section className="hero mt-9 mb-28">
      <Container>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-6">
            <h1 className="text-5xl leading-tight font-secondary">
              {t('firstName')} <br />
              {t('lastName')}
            </h1>
            <div>
              <p className="text-base">{t('position')}</p>
              <p className="text-base">
                {t('age', { age: 24 })}, {t('city')}
              </p>
            </div>
            {!isSmallDevice && (
              <div className="-rotate-90">
                <LanguageSwitcher />
              </div>
            )}
            <button
              type="button"
              className={`${
                isOpen ? 'hidden' : ''
              } fixed top-10 right-6 md:hidden z-10`}
              onClick={(): void => openNav()}
            >
              <span className="sr-only">Open main menu</span>
              <Icon
                width={30}
                height={30}
                title="menu-open"
                src="/icons/burger.svg"
              />
            </button>
          </div>
          <img className="mx-auto w-full" src="/images/hero.jpg" alt="hero" />
        </div>
      </Container>
    </section>
  );
};
