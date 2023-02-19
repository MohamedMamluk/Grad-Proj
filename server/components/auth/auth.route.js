const express = require('express');
const { register, login } = require('./auth.controller');
const router = express.Router();
const checkUserExists = require('../../middleware/checkUserExists');
const AdminModel = require('../admin/admin.model');

router.post('/register', checkUserExists(AdminModel), register);
router.post('/login', login);

module.exports = router;
