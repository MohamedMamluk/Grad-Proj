const ajv = require("ajv");
var Ajv = new ajv()
var StudentSchema = {
    "type":"object",
    "properties":{
        "firstName":{"type":"string","pattern":"^[a-zA-Z]+$","minLength":3 , "maxLength":20},
        "lastName":{"type":"string","pattern":"^[a-zA-Z]+$" ,"minLength":3 , "maxLength":20},
        "email":{"type":"string","pattern":"^[a-zA-Z0-9]+\@{1}[a-zA-Z0-9]+(.com){1}$"},
        "password":{"type":"string","minLength":6},
        "role":{"type":"string"},
        "phone":{"type":"string","minLength":11 , "maxLength":11  },
        "interests":{"type":"string"},
    },
    "required":["firstName","lastName" , "email" , "password" , "role" , "phone" , "interests" ],
    "minProperties":7,
    "maxProperties":7
}

module.exports = Ajv.compile(StudentSchema);