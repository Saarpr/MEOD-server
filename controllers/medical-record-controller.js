const Record = require ("../models/medical-records.js")

exports.medicalRecordController = {
    getMedicalRecord(req, res) {
        const recordId = req.params.recordId;
        Record.findOne({id: recordId}).then(record => {
            if(record)
                res.send(record);
            else 
                res.status(400).json({ error: "No record found!" })
        })
    },
    getUserRecords(req,res) {
        const userId = req.params.patientId;
        Record.find({patient_id : userId}).then(records => {
            if(records)
                res.send(records);
            else {
                res.status(400).json({ error: "No records found!" });
            }
        })
    },
    setMedicalRecord(req, res) {
        const medicalRecord = req.body;
        const newMedicalRecord = new Record(medicalRecord);
        const result = newMedicalRecord.save();
        if(result)
            res.status(200).json({user: medicalRecord , message : "user added!"});
        else 
            res.status(500).json({ error: "DB" });
    }
}


