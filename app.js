const express = require("express")
const morgan = require("morgan")
const app = express()
const database = require("./database_connection")

const bodyParser = require("body-parser")
const beerRoute = require("./routes/route-beers.js")
const wineRoute = require("./routes/route-wine.js")



app.use(bodyParser.json())
app.use(morgan("dev"))



app.use("/beer", beerRoute)
app.use("/wine", wineRoute)




app.post("/beer", (req, res, next) =>{
    database("beer").insert({brewery: request.body.brewery})
})
module.exports = app