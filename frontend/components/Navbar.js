'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo on the left */}
        <div className="text-2xl font-bold text-blue-600">
          SmartClass
        </div>

        {/* Buttons on the right */}
        <div className="flex space-x-3">
          <Link href="/auth">
            <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 text-sm">
              Login
            </button>
          </Link>
          <Link href="/student/dashboard">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 text-sm">
              Student
            </button>
          </Link>
          <Link href="/teacher/dashboard">
            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 text-sm">
              Teacher
            </button>
          </Link>
          <Link href="/admin/dashboard">
            <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 text-sm">
              Admin
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
