import { lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ModalProvider from './context/ModalProvider';
import './index.css';
import RootLayout from './pages/RootLayout.jsx';

// lazy import
const HomePage = lazy(() => import('./pages/HomePage'));

const router = createBrowserRouter([
  {
    // Định nghĩa layout được sử dụng chung
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <ModalProvider>
    <RouterProvider router={router} />
  </ModalProvider>,
);
