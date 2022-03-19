const performedProceduresRouter = require('express').Router();
const {performedProceduresController} = require("../controllers/performed_procedures-controller");

performedProceduresRouter.get('/' , performedProceduresController.getAll);


module.exports = {performedProceduresRouter};