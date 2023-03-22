const dotenv = require("dotenv")
dotenv.config()

const express = require('express')
const app = express()
// const port = process.env.PORT || 3000
const cors = require('cors')
const { urlencoded } = require('express')
const router = require('./src/routes/index');
app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true }))

app.use('/', router)

exports.course = app;
