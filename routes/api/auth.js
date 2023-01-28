const express = require('express');

const { validation, ctrlWrapper, authenticate, upload } = require('../../middlewares');
const { schemas } = require('../../models');
const { auth: ctrl } = require('../../controllers');

const router = express.Router();

router.post('/signup', validation(schemas.registerSchema), ctrlWrapper(ctrl.register));

router.get('/verify/:verificationToken', ctrlWrapper(ctrl.verifyEmail));

router.post('/verify', validation(schemas.verifyEmailSchema), ctrlWrapper(ctrl.resendVerifyEmail));

router.post('/login', validation(schemas.loginSchema), ctrlWrapper(ctrl.login));

router.get('/current', authenticate, ctrlWrapper(ctrl.getCurrent));

router.post('/logout', authenticate, ctrlWrapper(ctrl.logout));

router.patch('/avatars', authenticate, upload.single('avatar'), ctrlWrapper(ctrl.updateAvatar));

module.exports = router;
