const express = require('express');
const router = express.Router();
const instructorController = require('./instructor.controller');
const instructorDTO = require('./instructorDTO')


// GET all instructors
router.get('/', instructorController.getAllInstructors);

// GET a single instructor by ID
router.get('/:id', instructorController.getInstructorById);

// POST a new instructor
router.post('/', instructorDTO.validateInstructor , instructorController.createInstructor);

// PUT/update an existing instructor
router.put('/:id', instructorDTO.validateInstructor, instructorController.updateInstructor);

// DELETE an instructor
router.delete('/:id', instructorController.deleteInstructor);

module.exports = router;
