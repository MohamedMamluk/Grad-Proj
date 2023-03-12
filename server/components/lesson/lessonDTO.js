const ajv_instance = require('../../utils/ajv');

const lessonDTO = {
  type: 'object',
  properties: {
    description: {
      type: 'string',
      minLength: 50,
    },
    type: {
      type: 'string',
      enum: ['Video', 'Test', 'Resources', 'Certificate'],
    },
    link: {
      type: 'string',
    },
  },
  required: ['description', 'type', 'link'],
};

const patchLessonDTO = {
  type: 'object',
  properties: {
    description: {
      type: 'string',
      minLength: 50,
    },
    type: {
      type: 'string',
      enum: ['Video', 'Test', 'Resources', 'Certificate'],
    },
    link: {
      type: 'string',
    },
    courseId: {
      type: 'array',
      items: { type: 'string' },
    },
  },
};
module.exports = {
  lessonDTO: ajv_instance.compile(lessonDTO),
  patchLessonDTO: ajv_instance.compile(patchLessonDTO),
};
