const { Schema, model } = require('mongoose');

const metadataSchema = new Schema({
    distance_matrix_version: {
        type: Number,
        required: true,
    },

}, { collection: 'metadata' });

const Metadata = model('Metadata', metadataSchema);

module.exports = Metadata;