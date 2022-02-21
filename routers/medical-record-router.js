const medicalRecordRouter = require('express').Router();
const {medicalRecordController} = require('../controllers/medical-record-controller');

medicalRecordRouter.get('/get-record' , medicalRecordController.getMedicalRecord);
medicalRecordRouter.post('/set-record' , medicalRecordController.setMedicalRecord);


module.exports = {medicalRecordRouter};