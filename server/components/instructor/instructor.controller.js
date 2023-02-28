const instructorService = require('./instructor.service');

module.exports = {
    getAllInstructors: async (req, res) => {
        try {
            const instructors = await instructorService.getAllInstructors();
            res.status(200).json(instructors);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    getInstructorById: async (req, res) => {
        try {
            var _id = req.params.id
            const instructor = await instructorService.getInstructorById(_id);
            if (!instructor) {
                return res.status(404).send('Instructor not found');
            }
            res.status(200).json(instructor);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    createInstructor: async (req, res) => {
        try {
            const newInstructor = await instructorService.createInstructor(req.body);
            res.status(200).json(newInstructor);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    updateInstructor: async (req, res) => {
        try {
            var _id = req.params.id;
            var InstructorInfo = req.body;
            const updatedInstructor = await instructorService.updateInstructor(_id, InstructorInfo);
            if (!updatedInstructor) {
                return res.status(404).send('Instructor not found');
            }
            res.status(200).json(updatedInstructor);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    deleteInstructor: async (req, res) => {
        try {
            const deletedInstructor = await instructorService.deleteInstructor(req.params.id);
            if (!deletedInstructor) {
                return res.status(404).send('Instructor not found');
            }
            res.status(200).json(deletedInstructor);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
};
