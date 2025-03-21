import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', formData);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white/80 p-8 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-blue-500/20">
        <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl"></div>

        <h2 className="relative mb-8 text-center text-3xl font-bold text-gray-800">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome Back
          </span>
        </h2>

        <form onSubmit={handleSubmit} className="relative space-y-6">
          <div className="group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 bg-white/50 px-4 py-3 text-gray-700 shadow-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500 group-hover:shadow-lg"
              required
            />
          </div>

          <div className="group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 bg-white/50 px-4 py-3 text-gray-700 shadow-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500 group-hover:shadow-lg"
              required
            />
          </div>

          <button
            type="submit"
            className="relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/50 active:scale-[0.98]"
          >
            <span className="relative z-10">Login</span>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
          </button>

          <div className="mt-6 flex items-center justify-between">
            <a
              href="#"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500"
            >
              Forgot Password?
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500"
            >
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
