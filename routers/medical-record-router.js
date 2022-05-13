const medicalRecordRouter = require('express').Router();
const {medicalRecordController} = require('../controllers/medical-record-controller');

medicalRecordRouter.get('/:recordId' , medicalRecordController.getMedicalRecord);
medicalRecordRouter.post('/' , medicalRecordController.setMedicalRecord);

module.exports = {medicalRecordRouter};