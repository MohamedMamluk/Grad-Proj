const express = require('express');
const router = express.Router();
const instructorController = require('./instructor.controller');
const instructorDTO = require('./instructorDTO');

// GET all instructors
router.get('/', instructorController.getAllInstructors);

// GET a single instructor by ID
router.get('/:id', instructorController.getInstructorById);

// POST a new instructor
router.post(
  '/',
  (req, res, next) => {
    const valid = instructorDTO.validateInstructor(req.body);
    if (!valid) {
      return res.status(400).json(instructorDTO.validateInstructor.errors);
    }
    return next();
  },
  instructorController.createInstructor
);

// PUT/update an existing instructor
router.patch('/:id', instructorController.updateInstructor);

// DELETE an instructor
router.delete('/:id', instructorController.deleteInstructor);

module.exports = router;
