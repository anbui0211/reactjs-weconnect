import FormField from '@/components/FormField';
import TextInput from '@/components/FormInput/TextInput';
import { openSnackBar } from '@/redux/slices/snackBarSlice';
import { useLoginMutation } from '@/services/rootApi';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, CircularProgress } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

const LoginPage = () => {
  const [login, { data = {}, isLoading, isSuccess, isError, error }] =
    useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const yubSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues, // lấy ra giá trị các field trong form
  } = useForm({
    resolver: yupResolver(yubSchema),
  });

  useEffect(() => {
    if (isError) {
      dispatch(openSnackBar({ type: 'error', message: error?.data?.message }));
    }
    if (isSuccess) {
      dispatch(openSnackBar({ message: data.message }));
      navigate('/verify-otp', {
        state: {
          email: getValues('email'), // lấy ra email để truyền vào verify-otp page
        },
      });
    }
  }, [isError, isSuccess, error, dispatch, data.message, navigate, getValues]);

  const onSubmit = (formData) => {
    login(formData);
  };

  return (
    <div>
      <p className="mb-5 text-center text-xl font-bold">Login</p>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          name="email"
          label="Email"
          control={control}
          Component={TextInput}
          error={errors['email']}
        />
        <FormField
          name="password"
          label="Password"
          control={control}
          type="password"
          Component={TextInput}
          error={errors['password']}
        />
        <Button variant="contained" type="submit">
          {isLoading && <CircularProgress size={20} className="mr-3" />}
          Sign In
        </Button>
      </form>
      <p className="mt-4">
        New on our platform? <Link to="/register">Create an account</Link>
      </p>
    </div>
  );
};

export default LoginPage;
