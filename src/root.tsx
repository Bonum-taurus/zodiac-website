import { Routes, Route } from 'react-router-dom';

import App from './App';
import { Home } from './pages/Home/Home';
import { Gallery } from './pages/Gallery/Gallery';
import { Projects } from './pages/Projects/Projects';
import { Contacts } from './pages/Contacts/Contacts';


export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />}/>
        <Route path="gallery" element={<Gallery />}/>
        <Route path="projects" element={<Projects />}/>
        <Route path="contacts" element={<Contacts />}/>
      </Route>
    </Routes>
  )
}