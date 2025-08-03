<StudentLayout>
  <h1 className="text-xl font-bold mb-4">Welcome, Student</h1>
  <div className="grid md:grid-cols-2 gap-6">
    <div className="p-4 rounded-lg border bg-white shadow">
      <h2 className="font-semibold">Scan Attendance</h2>
      <QRScanner />
    </div>
    <div className="p-4 rounded-lg border bg-white shadow">
      <h2 className="font-semibold">Last Attendance</h2>
      <AttendanceTable data={recentAttendance} />
    </div>
  </div>
</StudentLayout>
