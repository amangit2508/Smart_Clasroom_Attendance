<TeacherLayout>
  <h1 className="text-xl font-bold mb-4">Teacher Panel</h1>
  <div className="grid md:grid-cols-2 gap-6">
    <Link href="/teacher/create-session">
      <button className="btn btn-primary w-full">Create Session</button>
    </Link>
    <Link href="/teacher/live">
      <button className="btn btn-outline w-full">Live Attendance View</button>
    </Link>
  </div>
</TeacherLayout>
