export default function Account() {
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
          <h3 className="text-md font-semibold">Marry Doe</h3>
          <p className="text-sm text-gray-500 mb-2">Marry@gmail.com</p>
          <p className="text-sm text-gray-600">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
            Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
}
