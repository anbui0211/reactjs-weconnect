import FormField from '@/components/FormField';
import TextInput from '@/components/FormInput/TextInput';
import { login } from '@/redux/slices/authSlice';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const { control } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      login({ accessToken: 'accesstoken', refreshToken: 'refreshtoken' }),
    );
  }, []);

  return (
    <div>
      <p className="mb-5 text-center text-xl font-bold">Login</p>
      <form className="flex flex-col gap-4">
        <FormField
          name="email"
          label="Email"
          control={control}
          Component={TextInput}
        />
        <FormField
          name="password"
          label="Password"
          control={control}
          type="password"
          Component={TextInput}
        />
        <Button variant="contained">Sign In</Button>
      </form>
      <p className="mt-4">
        New on our platform? <Link to="/register">Create an account</Link>
      </p>
    </div>
  );
};

export default LoginPage;
