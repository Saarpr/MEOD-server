const analysisRouter = require('express').Router();
const {analysisController} = require('../controllers/analysis-controller');

analysisRouter.post('/' , analysisController.getAnalysis);


module.exports = {analysisRouter};