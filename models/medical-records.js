const { Schema, model } = require('mongoose');

const recordSchema = new Schema({
    id: {
        type: Number,
        unique: true,
    },
    patient_id: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    main_diagnosis: {
        type: String,
        required: true,
    },
    performed_procedure: {
        type: String,
        required: true,
    },
    reason_for_encounter: {
        type: String,
    },
    reason_for_discharge: {
        type: String,
    },
    date_of_discharge: {
        type: Date,
    },
    associated_causes: {
        type: String,
    },
    secondary_diagnosis: {
        type: String,
    },
    indicator_of_transplants: {
        type: Boolean,
    },
    number_of_transplants: {
        type: String,
    },
}, { collection: 'medical-records' });

const Record = model('Record', recordSchema);

module.exports = Record;