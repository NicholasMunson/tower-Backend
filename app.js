const express = require("express")
const morgan = require("morgan")
const beers = require("./testapi.json")
const app = express()

app.use(morgan("dev"))

app.get("/my-bevs", (req, res, next) => {
    res.json({beers})
})
module.exports = app