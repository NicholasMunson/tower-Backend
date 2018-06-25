const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const app = express()
const database = require("./database_connection")

app.use(bodyParser.json())
app.use(morgan("dev"))

app.get("/beer", (req, res, next) => {
    database("beer").select().then( beer => {
        res.json({beer})
    })
})

app.get("/wine", (req, res, next) => {
    database("wine").select().then( wine => {
        res.json({wine})
    })
})

app.post("/beer", (req, res, next) =>{
    database("beer").insert({brewery: request.body.brewery})
})
module.exports = app