'use client';
import Navbar from '../components/Navbar';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar /> {/* ✅ Imported navbar here */}

      <main className="pt-28 flex-grow flex flex-col justify-center items-center px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Welcome to Smart Classroom Attendance System
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
          Take attendance using QR code and location verification. Choose your role to get started.
        </p>
      </main>
    </div>
  );
}
    