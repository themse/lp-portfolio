import * as ReactDOM from 'react-dom/client';

import App from 'App';
import 'styles/global.scss';

const rootElement = document.querySelector('#root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

ReactDOM.createRoot(rootElement).render(<App />);
