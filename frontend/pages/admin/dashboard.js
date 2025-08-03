<AdminLayout>
  <h1 className="text-xl font-bold mb-4">Admin Analytics</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Charts data={attendanceTrends} />
    <Charts data={absenteePatterns} />
  </div>
</AdminLayout>
