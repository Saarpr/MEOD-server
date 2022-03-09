const User = require ("../models/users")
const Record = require ("../models/medical-records")
const Patient = require ("../models/patients")
exports.authController = {
    signUp(req, res) {
        console.log("signed up successfully")
    },
    signIn(req, res) {
        console.log("signed in successfully")
    },
    logout(req, res) {
        console.log("signed in successfully")
    },
    getUser(req, res) {
        let id = req.params.id
        console.log(`The id is ${id}`)
        User.find({id: id}).then(user => {
            console.log(user)
        })
    },

    getPatient(req, res) {
        let id = req.params.id
        console.log(`The id is ${id}`)
        Patient.find({id: id}).then(user => {
            console.log(user)
        })
    },

    getMedicalRecord(req, res) {
        let id = req.params.id
        console.log(`The id is ${id}`)
        Record.find({id: id}).then(user => {
            console.log(user)
        })
    },
}






