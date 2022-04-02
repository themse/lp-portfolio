import { FC } from 'react';

import { About } from 'app/About';
import { Hero } from 'app/Hero';
import { Portfolio } from 'app/Portfolio';
import { Skills } from 'app/skills/Skills';
import { BaseLayout } from 'components/layout/BaseLayout';

const HomePage: FC = () => {
  return (
    <BaseLayout>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
    </BaseLayout>
  );
};

export default HomePage;
