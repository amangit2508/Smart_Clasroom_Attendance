const sessionSchema = new mongoose.Schema({
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  course: String,
  qrToken: String,
  expiresAt: Date,
  location: {
    lat: Number,
    lng: Number
  },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Session', sessionSchema);