import { useUser } from "../context/UserContext"; // adjust the path

export default function Account() {
  const { userData } = useUser();

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">No account data found. Please sign up first.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h2>
      <div className="flex items-start space-x-4">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="profile"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-md font-semibold">{userData.fullName}</h3>
          <p className="text-sm text-gray-500 mb-2">{userData.email}</p>
          <p className="text-sm text-gray-600">
            Phone: {userData.phone} <br />
            Company: {userData.company || "N/A"} <br />
            Agency: {userData.isAgency}
          </p>
        </div>
      </div>
    </div>
  );
}
