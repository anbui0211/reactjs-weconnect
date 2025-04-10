import FormField from '@/components/FormField';
import TextInput from '@/components/FormInput/TextInput';
import { openSnackBar } from '@/redux/slices/snackBarSlice';
import { useRegisterMutation } from '@/services/rootApi';
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Button } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

const RegisterPage = () => {
  /**
   * register: function được sinh ra từ useRegisterMutation, sẽ được sử dụng để thực hiện request đăng ký.
   * data: giá trị trả về sau khi request thành công
   * isLoading: trạng thái loading
   * error: giá trị trả về sau khi request thất bại
   *
   * Khi thực thi function register, isLoading sẽ được set thành true,
   * và khi request thành công, data sẽ có giá trị trả về và gán vào biến data
   *  và isLoading sẽ được set thành false.
   */
  const [register, { data = {}, isLoading, error, isSuccess, isError }] =
    useRegisterMutation();

  // coi như một tài liệu để hướng dẫn react-hook-form biết được field nào là bắt buộc hoặc optional
  const formSchema = yup.object().shape({
    fullName: yup.string().required('Please enter your full name'),
    email: yup
      .string()
      .email('Invalid email')
      .required('Please enter your email'),
    password: yup
      .string()
      .min(2, 'Password must be at least 6 characters long')
      .required('Please enter your password'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors }, // in ra các lỗi của form
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onSubmit(formData) {
    console.log(formData);
    register(data);
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(openSnackBar({ message: data.message }));
      navigate('/login');
    }
  }, [isSuccess, data.message, navigate, dispatch]);

  console.log({ data, isLoading, error, isError, errors });

  return (
    <div>
      <p className="mb-5 text-center text-xl font-bold">Register</p>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          name="fullName"
          label="Full Name"
          control={control}
          Component={TextInput}
          error={errors['fullName']}
        />
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
          Sign Up
        </Button>
        {isError && error.data?.message && (
          <Alert severity="error">{error.data.message}</Alert>
        )}
      </form>
      <p className="mt-4">
        Already have an account? <Link to="/login">Sign in instead</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
