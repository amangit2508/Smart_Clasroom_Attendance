const attendanceSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  sessionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Session' },
  timestamp: { type: Date, default: Date.now },
  location: {
    lat: Number,
    lng: Number
  }
});
module.exports = mongoose.model('Attendance', attendanceSchema);