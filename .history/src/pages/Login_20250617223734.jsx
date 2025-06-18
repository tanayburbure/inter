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
    <div className="min-h-screen flex flex-col justify-center px-6 py-12 bg-gray-50">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Signin to your PopX account</h2>
      <p className="text-sm text-gray-500 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <form className="space-y-4" onSubmit={handleLogin}>
        <div>
          <label className="text-sm text-purple-600 font-medium block mb-1">
            Email Address
          </label>
          <input
            name="email"
            type="email"
            placeholder="Enter email address"
            required
            className="w-full border rounded-md p-3"
          />
        </div>
        <div>
          <label className="text-sm text-purple-600 font-medium block mb-1">
            Password
          </label>
          <input
            name="password"
            type="password"
            placeholder="Enter password"
            required
            className="w-full border rounded-md p-3"
          />
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-md font-medium"
        >
          Login
        </button>
      </form>
    </div>
  );
}
