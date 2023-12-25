import { Outlet } from 'react-router-dom';
import './App.scss';

import { Navigation } from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <main className="content">
        <Outlet />
      </main>
    </>
  );
}

export default App;
