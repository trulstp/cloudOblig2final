const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routes = require('./routes/routes')
const cors = require('cors')
const path = require('path');
const PORT = 5000;

dotenv.config();

mongoose.connect(process.env.MONGO_DB, () =>console.log("Database connected"));

app.use(express.static(path.join(__dirname,"../frontend/build")));
app.use("*",(req,res)=>{
    res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

app.use(express.json())
app.use(cors())
app.use('/app', routes)
app.listen(PORT, () => console.log(`server is up and running on ${PORT}`));