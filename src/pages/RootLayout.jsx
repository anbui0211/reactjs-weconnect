import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// Supports weights 100-900
import { closeSnackBar } from '@/redux/slices/snackBarSlice';
import '@fontsource-variable/public-sans';
import { Alert, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

const RootLayout = () => {
  const { open, message, type } = useSelector((state) => {
    return state.snackBar;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <Suspense fallback={<p>Loading</p>}>
        <Outlet />
      </Suspense>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => dispatch(closeSnackBar())}
      >
        <Alert
          // onClose={handleClose}
          severity={type}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default RootLayout;
