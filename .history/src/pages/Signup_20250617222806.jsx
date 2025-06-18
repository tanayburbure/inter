import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6">
        <h2 className="text-center text-2xl font-semibold text-gray-900">
          Create your PopX account
        </h2>
        <form className="space-y-4">
          <div>
            <label className="text-sm text-purple-600 font-medium block mb-1">
              Full Name*
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="text-sm text-purple-600 font-medium block mb-1">
              Phone number*
            </label>
            <input
              type="tel"
              placeholder="Enter phone number"
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="text-sm text-purple-600 font-medium block mb-1">
              Email address*
            </label>
            <input
              type="email"
              placeholder="Enter email"
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="text-sm text-purple-600 font-medium block mb-1">
              Password*
            </label>
            <input
              type="password"
              placeholder="Enter password"
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="text-sm text-purple-600 font-medium block mb-1">
              Company name
            </label>
            <input
              type="text"
              placeholder="Enter company name"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm text-purple-600 font-medium mb-1">
              Are you an Agency?*
            </label>
            <div className="flex space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  required
                  className="mr-2 text-purple-600 focus:ring-purple-500"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  required
                  className="mr-2 text-purple-600 focus:ring-purple-500"
                />
                No
              </label>
            </div>
          </div>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault(); // Prevent form submission (since no backend)
              navigate('/account');
            }}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md font-medium transition duration-200"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
