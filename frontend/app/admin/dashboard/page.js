'use client';

export default function AdminDashboard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="p-8 bg-white rounded-2xl shadow-lg w-full max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>
        <p className="text-gray-600 mb-6">
          Welcome, Admin! 🎉 You are now logged in.
        </p>

        <div className="space-x-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
            Manage Users
          </button>
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500">
            View Reports
          </button>
        </div>
      </div>
    </div>
  );
}
