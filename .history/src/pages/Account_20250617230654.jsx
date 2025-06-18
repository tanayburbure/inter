import { useUser } from "./UserContex"; // adjust the path

export default function Account() {
  const { userData } = useUser();

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <p className="text-center text-gray-500 text-sm sm:text-base">
          No account data found. Please sign up first.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="lg:text-3xl sm:text-xl font-bold tracking-tight mb-8">Account Settings</h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-6 space-y-4 sm:space-y-0">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="profile"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
          />
          <div className="text-sm sm:text-base lg:w-40 leading-none">
            <h3 className="font-semibold text-gray-800 text-md sm:text-lg">{userData.fullName}</h3>
            <p className="text-gray-500 mb-2">{userData.email}</p>
            <p className="text-gray-600 leading-relaxed">
              <span className="block">Phone: {userData.phone}</span>
              <span className="block">Company: {userData.company || "N/A"}</span>
              <span className="block">Agency: {userData.isAgency}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
