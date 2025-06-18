import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContex'; // adjust path
import { useState } from 'react';

export default function Login() {
  const navigate = useNavigate();
  const { userData } = useUser();
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!userData) {
      setError('No account found. Please sign up first.');
      return;
    }

    if (email === userData.email && password === userData.password) {
      setError('');
      navigate('/account');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6">
        <div>
          <h2 className="text-center text-3xl font-bold tracking-tight">Sign in to your PopX account</h2>
          <p className="mt-2 text-center text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="text-sm text-purple-600 font-medium block mb-1">Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="Enter email address"
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="text-sm text-purple-600 font-medium block mb-1">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter password"
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md font-medium transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
