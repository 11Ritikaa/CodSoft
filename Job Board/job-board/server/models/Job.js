// server/models/Job.js
const mongoose = require('mongoose');
const JobSchema = new mongoose.Schema({
  title: String,
  description: String,
  company: String,
  location: String,
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  datePosted: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Job', JobSchema);