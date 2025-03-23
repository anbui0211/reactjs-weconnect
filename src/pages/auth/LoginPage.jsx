import FormField from '@/components/FormField';
import TextInput from '@/components/FormInput/TextInput';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const { control } = useForm();
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
        New on our platform? <Link to="/login">Create an account</Link>
      </p>
    </div>
  );
};

export default LoginPage;
