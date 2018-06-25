const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const app = express()
const bodyParser = require("body-parser")
const beerRoute = require("./routes/route-beers.js")
const wineRoute = require("./routes/route-wine.js")



app.use(cors())
app.use(bodyParser.json())
app.use(morgan("dev"))
app.use("/beer", beerRoute)
app.use("/wine", wineRoute)

module.exports = app