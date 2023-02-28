const InstructorModel = require('./instructor.model');

module.exports = {
    getAllInstructors: async () => {
        return InstructorModel.find({});
    },

    getInstructorById: async (_id) => {
        return InstructorModel.findById(_id);
    },

    createInstructor: async (instructorInfo) => {
        return InstructorModel.create(instructorInfo);
    },

    updateInstructor: async (_id, instructor) => {
        return InstructorModel.findByIdAndUpdate(_id, instructor, { new: true });
    },

    deleteInstructor: async (_id) => {
        return InstructorModel.findByIdAndDelete(_id);
    }
};
