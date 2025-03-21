import { ThemeProvider } from '@mui/material';
import { lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import theme from './configs/muiConfig';
import ModalProvider from './context/ModalProvider';
import './index.css';
import Login from './pages/Login';
import RegisterPage from './pages/RegisterPage';
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
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  </ThemeProvider>,
);
