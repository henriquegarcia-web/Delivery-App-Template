const { Router } = require('express');
const path = require('path');
const UserController = require('./app/controllers/UserController');

const router = Router();

router.get(
  '/',
  (req, res) => {
    res.send('ok');
  },
  UserController.login,
);

router.post(
  '/admin',
  (request, response, next) => {
    response.send('oi');
    next();
  },
  UserController.login,
);

router.get('/admin/panel');

module.exports = router;
