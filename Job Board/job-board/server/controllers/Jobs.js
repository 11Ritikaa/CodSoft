// server/controllers/jobs.js
const Job = require('../models/Job');

exports.createJob = async (req, res) => {
  const { title, description, company, location, postedBy } = req.body;
  try {
    const job = new Job({ title, description, company, location, postedBy });
    await job.save();
    res.status(201).json({ message: 'Job created successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getJobById = async (req, res) => {
  const { id } = req.params;
  try {
    const job = await Job.findById(id);
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
