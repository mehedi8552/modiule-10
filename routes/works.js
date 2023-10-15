const express = require('express');
const router = express.Router();
const Work = require('../models/WorksModel');
const authVerifyMiddleware = require('../middlewares/authVerifyMiddleware');

// Create a new work with token verification
router.post('/', authVerifyMiddleware, async (req, res) => {
  try {
    const work = new Work(req.body);
    await work.save();
    res.status(201).json(work);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a list of all works with token verification
router.get('/', authVerifyMiddleware, async (req, res) => {
  try {
    const works = await Work.find();
    res.json(works);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific work by ID with token verification
router.get('/:id', authVerifyMiddleware, async (req, res) => {
  try {
    const work = await Work.findById(req.params.id);
    if (!work) {
      return res.status(404).json({ message: 'Work not found' });
    }
    res.json(work);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a work by ID with token verification
router.put('/:id', authVerifyMiddleware, async (req, res) => {
  try {
    const work = await Work.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!work) {
      return res.status(404).json({ message: 'Work not found' });
    }
    res.json(work);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a work by ID with token verification
router.delete('/:id', authVerifyMiddleware, async (req, res) => {
  try {
    const work = await Work.findByIdAndRemove(req.params.id);
    if (!work) {
      return res.status(404).json({ message: 'Work not found' });
    }
    res.json({ message: 'Work deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
