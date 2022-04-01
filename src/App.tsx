import { FC } from 'react';

import { BaseLayout } from 'components/layout/BaseLayout';
import { HistoryProvider } from 'tools/history';

const App: FC = () => {
  return (
    <HistoryProvider>
      <BaseLayout>Hello World</BaseLayout>
    </HistoryProvider>
  );
};

export default App;
