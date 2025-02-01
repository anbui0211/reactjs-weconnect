import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div>
      <Suspense fallback={<p>Loadding</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default RootLayout;
