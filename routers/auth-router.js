const authRouter = require('express').Router();
const {authController} = require('../controllers/auth-controller');

authRouter.post('/signup' , authController.signUp);
authRouter.post('/signin' , authController.signIn);
authRouter.post('/logout' , authController.logout);


module.exports = {authRouter};