const Patient = require ("../models/patients")

exports.patientController = {
    getPatient(req, res) {
        const patientID = req.params.id;
        Patient.findOne({id: patientID}).then(patient => {
            if(patient)
                res.send(patient);
            else
                res.status(400).json({ error: "No such user!" });
        })

    },
    getAllPatients(req, res) {
        Patient.find().then(patients => {
            if(patients)
                res.send(patients);
            else
                res.status(400).json({ error: "No such user!" });
        })
    },
    addPatient(req,res) {
        const body = req.body;
        Patient.findOne({ id: body.id}).then(patient => {
            if(patient)
                res.status(400).json({ error: "user already exist!" });
            else {
                const newPatient = new Patient(body);
                const result = newPatient.save();
                if(result)
                    res.status(200).json({user: body , message : "user added!"})
                else 
                    res.status(500).json({ error: "DB" });
            }
        })
    },
    updatePatient(req,res) {
        const body = req.body;
        Patient.findOneAndUpdate({id: body.id} ,body ,{ new:true , useFindAndModify:false} ,(err,patient) => {
            if(err)
                res.status(500).send(err);
            else 
                res.status(200).json({message: "user updated!"});
        })
    }, 

}
