const Ajv = require('ajv');
const ajv_formats = require('ajv-formats');

const Ajv_Instance = new Ajv({ allErrors: true, useDefaults: true });

ajv_formats(Ajv_Instance);

module.exports = Ajv_Instance;
