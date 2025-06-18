import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-end px-6 py-12 bg-gray-50">
      <div className="mb-20">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Welcome to PopX</h1>
        <p className="text-sm text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <button
          onClick={() => navigate('/signup')}
          className="w-full bg-purple-600 text-white py-3 rounded-md font-medium mb-4"
        >
          Create Account
        </button>
        <button
          onClick={() => navigate('/login')}
          className="w-full bg-purple-200 text-purple-900 py-3 rounded-md font-medium"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}
