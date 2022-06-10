const { Schema, model } = require('mongoose');

const patientSchema = new Schema({
    id: {
        type: String,
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
        enum: ["M", "F"]
    },
    race: {
        type: String,
    },
    nationality: {
        type: String,
        required: true,
    },
    ethnic_group: {
        type: String,
    },
    healthcare_unit: {
        type: String,
    },
}, { collection: 'patients' });

const Patient = model('Patient', patientSchema);

module.exports = Patient;