const express = require('express');
const router = express.Router();
const database = require("../database_connection");

router.get("/", (req, res, next) => {
    database("wine").select().then( wine => {
        res.json({wine})
    })
})

module.exports = router