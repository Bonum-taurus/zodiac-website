import { Routes, Route } from 'react-router-dom';

import App from './App';
import { Home } from './pages/Home/Home';


export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />}/>
      </Route>
    </Routes>
  )
}