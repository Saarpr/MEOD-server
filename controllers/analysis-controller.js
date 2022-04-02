const axios = require('axios')
const Analytics = require("../models/analytics");
const MedicalRecord = require("../models/medical-records");
const Patient = require("../models/patients");
const  moment = require('moment');
const getFullMedicalRecord = (patient, medical_record) => {
    const now = moment();
    const formattedNow = now.format("YYYYMM");
    const fullFormattedNow = now.format("YYYYMMDD");
    return {
        "id": patient.id || '',
        "state": patient.state || '',
        "healthcare_unit": medical_record.healthcare_unit || '',
        "issue_date": formattedNow,
        "performed_procedure": medical_record.performed_procedure || '',
        "hashed_patient_identifier": patient.hashed_patient_identifier || '',
        "age": moment().diff(moment(patient.date_of_birth, 'MM/DD/YYYY'), 'years') || 0,
        "gender": patient.gender || '',
        "race": 0,//patient.race || '',
        "nationality": patient.nationality || '',
        "reason_for_encounter": medical_record.reason_for_encounter || '',
        "reason_for_discharge": medical_record.reason_for_discharge || '',
        "date_of_discharge": medical_record.reason_for_discharge ? fullFormattedNow : '',
        "associated_causes": medical_record.associated_causes || '',
        "main_diagnosis": medical_record.main_diagnosis || '',
        "secondary_diagnosis": patient.secondary_diagnosis || '',
        "ethnic_group": patient.ethnic_group || '',
        "weight": medical_record.weight,
        "height": medical_record.height * 100,
        "indicator_of_transplantation": medical_record.indicator_of_transplantation || 'N',
        "number_of_transplantation": medical_record.number_of_transplantation || 0,
    }
}
exports.analysisController = {
    getAnalysis(req, res) {
        const predictPath = "http://3.250.76.68:8000/predict"
        console.log("search medical record id: ", req.body.medical_record_id);
        MedicalRecord.findOne({_id: req.body.medical_record_id}).then(medical_record => {
            console.log("found medical record for patient", medical_record.patient_id);
            Patient.findOne({id: medical_record.patient_id}).then(patient => {
                console.log("found patient", patient.id);
                const full_medical_record = getFullMedicalRecord(patient, medical_record)
                axios
                    .post(predictPath, full_medical_record)
                    .then(response => {
                        console.log("predict response");
                        const cluster = response.data.cluster
                        console.log("cluster: " + cluster);
                        Analytics.find().then(result => {
                            console.log("found analytics");
                            res.status(200).send({
                                statistics: result[0].clusters[cluster],
                                performed_procedure: full_medical_record.performed_procedure
                            });
                        })
                    })
                    .catch(error => {
                        res.status(500).send({message: error.message})
                    })
            })
        })

    }

}


