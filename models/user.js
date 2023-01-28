const { Schema, model } = require('mongoose');

const handleErrors = require('../middlewares/validationErrors');

const Joi = require('joi');

const emailRegex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-z]+)$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 2,
      required: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      mattch: emailRegex,
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, 'Password is required'],
    },
    subscription: {
      type: String,
      enum: ['starter', 'pro', 'business'],
      default: 'starter',
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, 'Verify token is required'],
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      required: true,
    },
  },
  { virsionKey: false, timestamps: true }
);

userSchema.post('save', handleErrors);

const registerSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().pattern(emailRegex).required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().pattern(emailRegex).required(),
  password: Joi.string().min(6).required(),
});

const verifyEmailSchema = Joi.object({
  email: Joi.string().email().pattern(emailRegex).required(),
});

const schemas = {
  registerSchema,
  loginSchema,
  verifyEmailSchema,
};

const User = model('user', userSchema);
module.exports = {
  User,
  schemas,
};
