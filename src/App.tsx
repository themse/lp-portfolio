import { FC } from 'react';
import { I18nextProvider } from 'react-i18next';

import { HistoryProvider } from 'common/history';
import i18n from 'common/i18n';
import HomePage from 'pages/Home';

const App: FC = () => {
  return (
    <HistoryProvider>
      <I18nextProvider i18n={i18n}>
        <HomePage />
      </I18nextProvider>
    </HistoryProvider>
  );
};

export default App;
