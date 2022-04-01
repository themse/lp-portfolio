import { FC } from 'react';
import { I18nextProvider } from 'react-i18next';

import { BaseLayout } from 'components/layout/BaseLayout';
import { HistoryProvider } from 'common/history';
import { Hero } from 'app/Hero';
import i18n from 'common/i18n';
import { About } from 'app/About';

const App: FC = () => {
  return (
    <HistoryProvider>
      <I18nextProvider i18n={i18n}>
        <BaseLayout>
          <Hero />
          <About />
        </BaseLayout>
      </I18nextProvider>
    </HistoryProvider>
  );
};

export default App;
