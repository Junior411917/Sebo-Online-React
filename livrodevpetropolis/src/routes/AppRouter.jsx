import { Routes, Route } from 'react-router-dom';
import Inicio from '../pages/início';
import Autores from '../pages/Autores';
import Posts from '../pages/Posts';
import Update from '../pages/Update';
import Error from '../pages/Error';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/autores" element={<Autores />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/update" element={<Update />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
