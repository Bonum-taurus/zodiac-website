import ReactDOM from 'react-dom/client';

import { HashRouter as Router } from 'react-router-dom';
import { Root } from './root';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Root />
  </Router>
);
