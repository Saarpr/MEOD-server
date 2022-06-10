const { Schema, model } = require('mongoose');

const metadataSchema = new Schema({
    model_version: {
        type: Number,
        required: true,
    },
    model_versions: {
        type: Array,
        required: true,
    },

}, { collection: 'metadata' });

const Metadata = model('Metadata', metadataSchema);

module.exports = Metadata;