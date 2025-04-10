import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// Supports weights 100-900
import '@fontsource-variable/public-sans';
const AuthLayout = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-dark-200">
      <div className="h-fit w-[450px] bg-white px-8 py-10">
        <img src="/weconnect-logo.png" className="mx-auto mb-6" />
        <Suspense fallback={<p>Loadding</p>}>
          {/* Khi có bất kì truy cập vào route con của ProtectedLayout thì sẽ render ra component của layout đó và thay thế cho Outlet */}
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default AuthLayout;
