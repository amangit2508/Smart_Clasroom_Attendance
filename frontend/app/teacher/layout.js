export default function TeacherLayout({ children }) {
  return (
    <div className="min-h-screen bg-green-100">
      <header className="bg-green-700 text-white p-4">
        <h1 className="text-xl font-semibold">Teacher Panel</h1>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
