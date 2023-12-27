import { Outlet, useLocation } from 'react-router-dom';
import './App.scss';

import { Navigation } from './components/Navigation';

function App() {
  const { search } = useLocation();

  console.log(search)

  return (
    <>
      {search !== '?modal=slider' && <Navigation />}
      <main className="content">
        <Outlet />
      </main>
    </>
  );
}

export default App;
