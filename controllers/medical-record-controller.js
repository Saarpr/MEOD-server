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
    getUserRecord(req,res) {
        const userId = req.params.patientId;
        const recordId = req.params.recordId;
        Record.findOne({patient_id : userId, id: recordId}).then(record => {
            if(record)
                res.send(record);
            else
                res.status(400).json({ error: "No record found!" })
        })

    },
    async setMedicalRecord(req, res) {
        const medicalRecord = req.body;
        const newMedicalRecord = await new Record(medicalRecord);
        const result = await newMedicalRecord.save();
        console.log(newMedicalRecord.id)

        if(result)
            res.send({"id": newMedicalRecord.id});
            // res.send(newMedicalRecord.id);
        else
            res.status(500).json({ error: "DB" });
    }
}


