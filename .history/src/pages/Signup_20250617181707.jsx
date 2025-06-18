import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 py-12 bg-gray-50">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Create your PopX account</h2>
      <form className="space-y-4">
        <div>
          <label className="text-sm text-purple-600 font-medium">Full Name*</label>
          <input type="text" placeholder="Enter full name" className="w-full border rounded-md p-3" />
        </div>
        <div>
          <label className="text-sm text-purple-600 font-medium">Phone number*</label>
          <input type="text" placeholder="Enter phone number" className="w-full border rounded-md p-3" />
        </div>
        <div>
          <label className="text-sm text-purple-600 font-medium">Email address*</label>
          <input type="email" placeholder="Enter email" className="w-full border rounded-md p-3" />
        </div>
        <div>
          <label className="text-sm text-purple-600 font-medium">Password*</label>
          <input type="password" placeholder="Enter password" className="w-full border rounded-md p-3" />
        </div>
        <div>
          <label className="text-sm text-purple-600 font-medium">Company name</label>
          <input type="text" placeholder="Enter company name" className="w-full border rounded-md p-3" />
        </div>

        <div>
          <label className="block text-sm text-purple-600 font-medium mb-1">Are you an Agency?*</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input type="radio" name="agency" className="mr-2 text-purple-600" /> Yes
            </label>
            <label className="flex items-center">
              <input type="radio" name="agency" className="mr-2 text-purple-600" /> No
            </label>
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigate('/account')}
          className="w-full bg-purple-600 text-white py-3 rounded-md font-medium mt-4"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
