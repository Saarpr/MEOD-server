const authRouter = require('express').Router();
const {authController} = require('../controllers/auth-controller');

authRouter.post('/signup' , authController.signUp);
authRouter.post('/signin' , authController.signIn);
authRouter.post('/logout' , authController.logout);
authRouter.get('/get_user/:id' , authController.getUser);
authRouter.get('/get_patient/:id' , authController.getPatient);
authRouter.get('/get_record/:id' , authController.getMedicalRecord);


module.exports = {authRouter};