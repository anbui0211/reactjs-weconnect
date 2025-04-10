import FormField from '@/components/FormField';
import OTPInput from '@/components/FormInput/OTPInput';
import { login } from '@/redux/slices/authSlice';
import { openSnackBar } from '@/redux/slices/snackBarSlice';
import { useVerifyOTPMutation } from '@/services/rootApi';
import { Button, CircularProgress } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const OTPVerifyPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm();
  const location = useLocation(); // lấy dữ liệu từ trang trước đó (gửi thông qua navigate)
  const [verifyOTP, { data, isLoading, isError, isSuccess, error }] =
    useVerifyOTPMutation();

  const onSubmit = (formData) => {
    console.log(formData);
    verifyOTP({ email: location.state.email, otp: formData.otp });
  };

  useEffect(() => {
    if (isError) {
      dispatch(openSnackBar({ type: 'error', message: error?.data?.message }));
    }
    if (isSuccess) {
      dispatch(
        login({
          accessToken: data?.data?.access_token,
          refreshToken: data?.data?.refresh_token,
        }),
      );
      navigate('/');
    }
  }, [isError, isSuccess, dispatch, data, navigate, error]);

  return (
    <div>
      <p className="mb-5 text-center text-xl font-bold">
        Two-Step Verification
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormField
          name="otp"
          label="Type your 6 digit security code"
          control={control}
          Component={OTPInput}
        />

        <Button variant="contained" type="submit">
          {isLoading && <CircularProgress size={20} color="inherit" />}
          Verify my account
        </Button>
      </form>
      <p className="mt-4">
        Didn&apos;t get the code?? <Link to="/login">Resend</Link>
      </p>
    </div>
  );
};

export default OTPVerifyPage;
