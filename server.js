const express = require("express");
const app = express();
const port = process.env.PORT;
const { authRouter } = require("./routers/auth-router");
const { medicalRecordRouter } = require("./routers/medical-record-router");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/auth', authRouter);
app.use('/record', medicalRecordRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something is broken!');
});

app.listen(port, () => {
    console.log('Express server is running on port ', port)
});