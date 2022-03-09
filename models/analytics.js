const { Schema, model } = require('mongoose');

const analyticsSchema = new Schema({
    clusters: {
        type: [Object],
        required: true,
    },

}, { collection: 'analytics' });

const Analytics = model('Analytics', analyticsSchema);

module.exports = Analytics;