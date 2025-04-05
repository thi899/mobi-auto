import { createBrowserRouter } from 'react-router-dom';
import Busca from '../pages/Busca';
import Resultado from '../pages/Resultado';

export const router = createBrowserRouter([
  { path: '/', element: <Busca /> },
  { path: '/resultado', element: <Resultado /> },
]);
