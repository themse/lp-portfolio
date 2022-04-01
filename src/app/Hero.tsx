import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from 'components/Container';
import { LanguageSwitcher } from './components/LanguageSwitcher';

export const Hero: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <Container>
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-tpl-black-900 text-5xl leading-tight font-secondary">
              {t('firstName')} <br />
              {t('lastName')}
            </h1>
            <div>
              <p className="text-tpl-black-900 text-base">{t('position')}</p>
              <p className="text-tpl-black-900 text-base">
                {t('age', { age: 24 })}, {t('city')}
              </p>
            </div>
            <div className="-rotate-90">
              <LanguageSwitcher />
            </div>
          </div>
          <img className="mx-auto w-full" src="/images/hero.jpg" alt="hero" />
        </div>
      </Container>
    </section>
  );
};
