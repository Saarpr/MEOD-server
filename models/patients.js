const { Schema, model } = require('mongoose');

const patientSchema = new Schema({
    id: {
        type: Number,
        unique: true,
    },
    date_of_birth: {
        type: Date,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"]
    },
    race: {
        type: String,
        required: true,
    },
    nationality: {
        type: String,
        required: true,
    },
    ethnic_group: {
        type: String,
    },
}, { collection: 'patients' });

const Patient = model('Patient', patientSchema);

module.exports = Patient;