import { ThemeProvider } from '@mui/material';
import { lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import theme from './configs/muiConfig';
import ModalProvider from './context/ModalProvider';
import './index.css';
import AuthLayout from './pages/auth/AuthLayout';
import RegisterPage from './pages/auth/RegisterPage';
import RootLayout from './pages/RootLayout.jsx';
import LoginPage from './pages/auth/LoginPage';
import OTPVerifyPage from './pages/auth/OTPVerifyPage';
import { Provider } from 'react-redux';
<<<<<<< Updated upstream
import { store } from './redux/store';
=======
import { persistor, store } from './redux/store';
import ProtectedLayout from './pages/ProtectedLayout';
import { PersistGate } from 'redux-persist/integration/react';
>>>>>>> Stashed changes

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
        // Sử dụng laylout chung cho auth
        element: <AuthLayout />,
        children: [
          {
            path: '/register',
            element: <RegisterPage />,
          },
          {
            path: '/login',
            element: <LoginPage />,
          },
          {
            path: '/verify-otp',
            element: <OTPVerifyPage />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={<p>Loading......</p>} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <RouterProvider router={router} />
        </ModalProvider>
      </ThemeProvider>
    </PersistGate>
  </Provider>,
);
