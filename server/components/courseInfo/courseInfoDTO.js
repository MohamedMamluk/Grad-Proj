const Ajv_Instance = require('../../utils/ajv');
const courseInfoDTO = {
    type: 'object',
    properties:{
        // categories: {
        //     validate: {
        //         type: 'object',
        //         minLength: 1,
        //     },
        //   },
          description: {
            type: "string",
            minLength: 20,
          },
          level: {
            type: "string",
            enum: ['Beginner', 'Intermediate', 'Advanced'],
          }
    },
    required: ['description','level']
}


module.exports = Ajv_Instance.compile(courseInfoDTO);