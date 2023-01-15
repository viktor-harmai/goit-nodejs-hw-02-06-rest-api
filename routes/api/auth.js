const express = require('express');

const { validation, ctrlWrapper, authenticate } = require('../../middlewares');
const { schemas } = require('../../models');
const { auth: ctrl } = require('../../controllers');

const router = express.Router();

router.post('/signup', validation(schemas.registerSchema), ctrlWrapper(ctrl.register));

router.post('/login', validation(schemas.loginSchema), ctrlWrapper(ctrl.login));

router.get('/current', authenticate, ctrlWrapper(ctrl.getCurrent));

router.post('/logout', authenticate, ctrlWrapper(ctrl.logout));

module.exports = router;
