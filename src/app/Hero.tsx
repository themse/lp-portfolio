import { FC } from 'react';

import { Container } from 'components/Container';
import { LanguageSwitcher } from './components/LanguageSwitcher';

export const Hero: FC = () => {
  return (
    <section className="hero">
      <Container>
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-tpl-black-900 text-5xl leading-tight font-secondary">
              John <br />
              Smith
            </h1>
            <div>
              <p className="text-tpl-black-900 text-base">UX | UI designer</p>
              <p className="text-tpl-black-900 text-base">
                24 years old, Seattle
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
