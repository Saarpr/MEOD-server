const patientRouter = require('express').Router();
const { patientController } = require('../controllers/patient-controller');
const {medicalRecordController} = require("../controllers/medical-record-controller");

patientRouter.get('/:id' , patientController.getPatient);
patientRouter.get('/' , patientController.getAllPatients);
patientRouter.post('/' , patientController.addPatient);
patientRouter.get('/:patientId/records/' , medicalRecordController.getUserRecords);
patientRouter.get('/:patientId/records/:recordId/' , medicalRecordController.getUserRecord);
patientRouter.put('/:id' , patientController.updatePatient);


module.exports = {patientRouter};