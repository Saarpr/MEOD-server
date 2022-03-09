const express = require("express");
const app = express();
const port = process.env.PORT;
const { authRouter } = require("./routers/auth-router");
const { medicalRecordRouter } = require("./routers/medical-record-router");
const { patientRouter } = require("./routers/patient-router");
const { analysisRouter } = require("./routers/analysis-router");

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/auth', authRouter);
app.use('/record', medicalRecordRouter);
app.use('/patient', patientRouter);
app.use('/analysis', analysisRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something is broken!');
});

app.listen(port, () => {
    console.log('Express server is running on port ', port)
});