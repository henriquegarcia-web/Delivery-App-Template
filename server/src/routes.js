const { Router } = require('express');

const UserController = require('./app/controllers/UserController');

const router = Router();

router.get('/admin', UserController.index);

module.exports = router;
