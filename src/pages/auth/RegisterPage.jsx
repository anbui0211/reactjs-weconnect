import FormField from '@/components/FormField';
import TextInput from '@/components/FormInput/TextInput';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const { control } = useForm();
  return (
    <div>
      <p className="mb-5 text-center text-xl font-bold">Register</p>
      <form className="flex flex-col gap-4">
        <FormField
          name="fullname"
          label="Full Name"
          control={control}
          Component={TextInput}
        />
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
        <Button variant="contained">Sign Up</Button>
      </form>
      <p className="mt-4">
        Already have an account? <Link to="/login">Sign in instead</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
