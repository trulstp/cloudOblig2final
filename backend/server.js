const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routes = require('./routes/routes')
const cors = require('cors')
const PORT = process.env.PORT || 5000;

dotenv.config();

mongoose.connect(process.env.MONGO_DB, () =>console.log("Database connected"));

app.use(express.json())
app.use(cors())
app.use('/app', routes)
app.listen(PORT, () => console.log(`server is up and running on ${PORT}`));