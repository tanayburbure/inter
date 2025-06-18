import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen md:items-center mg:justify-center lg:items-center lg:justify-center flex flex-col justify-end px-6 py-12 bg-gray-50">
      <div className="mb-20">
        <h1 className="text-3xl font-bold mb-1 tracking-tight">Welcome to PopX</h1>
        <p className="text-md text-gray-700 mb-6 tracking-tight">
          Lorem ipsum dolor shat amet, consectetur adipiscing elit.
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
