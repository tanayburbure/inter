import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 py-12 bg-gray-50">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Signin to your PopX account</h2>
      <p className="text-sm text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

      <div className="space-y-4">
        <div>
          <label className="text-sm text-purple-600 font-medium">Email Address</label>
          <input type="email" placeholder="Enter email address" className="w-full border rounded-md p-3" />
        </div>
        <div>
          <label className="text-sm text-purple-600 font-medium">Password</label>
          <input type="password" placeholder="Enter password" className="w-full border rounded-md p-3" />
        </div>
        <button
          onClick={() => navigate('/account')}
          className="w-full bg-gray-300 text-white py-3 rounded-md font-medium"
        >
          Login
        </button>
      </div>
    </div>
  );
}