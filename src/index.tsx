import React from 'react';
import * as ReactDOM from 'react-dom/client';

import App from 'App';

const rootElement = document.querySelector('#root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

ReactDOM.createRoot(rootElement).render(<App />);
