export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-red-50 flex flex-col">
      {/* Header */}
      <header className="bg-red-600 text-white p-4 font-bold">
        Admin Panel
      </header>

      {/* Main - flex-grow to take space, and flex to center */}
      <main className="flex-grow flex items-center justify-center p-6">
        {children}
      </main>
    </div>
  );
}
