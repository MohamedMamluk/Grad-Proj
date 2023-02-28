const InstructorModel = require('./instructor.model');

module.exports = {
    getAllInstructors: async () => {
        return await InstructorModel.find({});
    },

    getInstructorById: async (_id) => {
        return await InstructorModel.findById(id);
    },

    createInstructor: async (instructorInfo) => {
        return await InstructorModel.create(instructorInfo);
    },

    updateInstructor: async (id, instructor) => {
        return await InstructorModel.findByIdAndUpdate(id, instructor, { new: true });
    },

    deleteInstructor: async (id) => {
        return await InstructorModel.findByIdAndDelete(id);
    }
};
