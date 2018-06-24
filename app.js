const express = require("express")
const morgan = require("morgan")
const app = express()

app.use(morgan("dev"))

app.get("/my-bevs", (req, res, next) => {
    res.json()
})
module.exports = app