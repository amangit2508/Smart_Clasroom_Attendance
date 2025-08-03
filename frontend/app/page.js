'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8">Welcome to Smart Classroom System</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
        <Link href="/auth">
          <button className="w-full py-3 px-4 bg-gray-800 text-white rounded hover:bg-gray-700">
            Login / Register
          </button>
        </Link>

        <Link href="/student/dashboard">
          <button className="w-full py-3 px-4 bg-blue-600 text-white rounded hover:bg-blue-500">
            Student Panel
          </button>
        </Link>

        <Link href="/teacher/dashboard">
          <button className="w-full py-3 px-4 bg-green-600 text-white rounded hover:bg-green-500">
            Teacher Panel
          </button>
        </Link>

        <Link href="/admin/dashboard">
          <button className="w-full py-3 px-4 bg-red-600 text-white rounded hover:bg-red-500">
            Admin Panel
          </button>
        </Link>
      </div>
    </main>
  );
}
