const medicalRecordRouter = require('express').Router();
const {medicalRecordController} = require('../controllers/medical-record-controller');

medicalRecordRouter.get('/get-record/:recordId' , medicalRecordController.getMedicalRecord);
medicalRecordRouter.get('/get-user-records/:patientId' , medicalRecordController.getUserRecords);
medicalRecordRouter.post('/set-record' , medicalRecordController.setMedicalRecord);

module.exports = {medicalRecordRouter};