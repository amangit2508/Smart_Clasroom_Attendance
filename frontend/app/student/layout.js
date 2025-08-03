export default function StudentLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white px-6 py-4">
        <h1 className="text-xl font-semibold">Student Panel</h1>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
