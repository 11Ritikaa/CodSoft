// server/routes/jobs.js
const express = require('express');
const { createJob, getJobs, getJobById } = require('../controllers/jobs');
const router = express.Router();

router.post('/', createJob);
router.get('/', getJobs);
router.get('/:id', getJobById);

module.exports = router;
