const patientRouter = require('express').Router();
const { patientController } = require('../controllers/patient-controller');

patientRouter.get('/get-patient/:id' , patientController.getPatient);
patientRouter.get('/get-all-patients' , patientController.getAllPatients);
patientRouter.post('/add-patient' , patientController.addPatient);
patientRouter.put('/update-patient' , patientController.updatePatient);

module.exports = {patientRouter};