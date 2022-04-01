import { FC } from 'react';

import { BaseLayout } from 'components/layout/BaseLayout';
import { HistoryProvider } from 'tools/history';
import { Hero } from 'app/Hero';

const App: FC = () => {
  return (
    <HistoryProvider>
      <BaseLayout>
        <Hero />
      </BaseLayout>
    </HistoryProvider>
  );
};

export default App;
