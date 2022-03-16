const { Schema, model } = require('mongoose');

const recordSchema = new Schema({
    // id: {
    //     type: Number,
    //     // unique: true,
    // },
    patient_id: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
    },
    height: {
        type: Number,
    },
    main_diagnosis: {
        type: String,
    },
    performed_procedure: {
        type: String,
    },
    reason_for_encounter: {
        type: String,
    },
    reason_for_discharge: {
        type: String,
    },
    date_of_discharge: {
        type: Number,
    },
    associated_causes: {
        type: String,
    },
    secondary_diagnosis: {
        type: String,
    },
    indicator_of_transplantation: {
        type: String,
    },
    number_of_transplantation: {
        type: Number,
    },
}, { collection: 'medical-records' });

const Record = model('Record', recordSchema);

module.exports = Record;