const axios = require('axios')
const Analytics = require("../models/analytics");

exports.analysisController = {
    getAnalysis(req, res) {
        const predictPath = "http://localhost:8000/predict"
        axios
            .post(predictPath, req.body)
            .then(response => {
                const cluster = response.data.cluster
                Analytics.find().then(result => {
                    res.status(200).send(result[0].clusters[cluster]);
                })
            })
            .catch(error => {
                console.error(error)
            })
    }

}


