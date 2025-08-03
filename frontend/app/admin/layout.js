export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-red-50">
      <header className="bg-red-600 text-white p-4 font-bold">
        Admin Panel
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
