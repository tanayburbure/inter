import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContex"; // adjust the path

export default function Signup() {
  const navigate = useNavigate();
  const { setUserData } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      fullName: form.fullName.value,
      phone: form.phone.value,
      email: form.email.value,
      password: form.password.value,
      company: form.company.value,
      isAgency: form.agency.value,
    };

    setUserData(data);
    navigate("/account");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6">
        <h2 className="text-center text-2xl font-semibold text-gray-900">
          Create your PopX account
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm text-purple-600 font-medium block mb-1">
              Full Name*
            </label>
            <input
              name="fullName"
              type="text"
              placeholder="Enter full name"
              required
              className="w-full border border-gray-300 rounded-md p-3"
            />
          </div>
          <div>
            <label className="text-sm text-purple-600 font-medium block mb-1">
              Phone number*
            </label>
            <input
              name="phone"
              type="tel"
              placeholder="Enter phone number"
              required
              className="w-full border border-gray-300 rounded-md p-3"
            />
          </div>
          <div>
            <label className="text-sm text-purple-600 font-medium block mb-1">
              Email address*
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter email"
              required
              className="w-full border border-gray-300 rounded-md p-3"
            />
          </div>
          <div>
            <label className="text-sm text-purple-600 font-medium block mb-1">
              Password*
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter password"
              required
              className="w-full border border-gray-300 rounded-md p-3"
            />
          </div>
          <div>
            <label className="text-sm text-purple-600 font-medium block mb-1">
              Company name
            </label>
            <input
              name="company"
              type="text"
              placeholder="Enter company name"
              className="w-full border border-gray-300 rounded-md p-3"
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
                  value="Yes"
                  required
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="agency"
                  value="No"
                  required
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#6C25FF] cursor-pointer text-white py-3 rounded-md font-medium transition duration-200"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
